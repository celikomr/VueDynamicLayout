import axios from 'axios'
import router from '@/router'
import config from '@/config/config'
import StorageService from './storage.service'

class AxiosService {
    _activateInterceptors() {
        // request interceptor
        axios.interceptors.request.use(
            conf => {
                if (Storage._getAuth.token) {
                    conf.headers['Content-Type'] = 'application/json'
                }

                return conf
            },
            error => {
                Promise.reject(error)
            })

        // response interceptor
        axios.interceptors.response.use(response => {
            return response
        }, async function (error) {
            const request = error.config

            if (error.response.status === 401 && !request._retry) {
                router.push('/login')
                request._retry = true

                return await axios({
                    method: 'post',
                    url: config.url + 'auth/refresh',
                    data: { rToken: StorageService._getAuth.rToken },
                }).then(response => {
                    if (response.status === 201) {
                        // 1) set token to LocalStorage
                        StorageService._setAuth(response.data)

                        // 2) change Content-Type header
                        axios.defaults.headers.common['Authorization'] = StorageService._getAuth.token

                        // 3) return request object with axios
                        return axios(request)
                    }
                }).catch(error => {
                    // return Error object with Promise
                    return Promise.reject(error)
                })
            }

            // return Error object with Promise
            return Promise.reject(error)
        })
    }

    _deactivateInterceptors() {
        // ...
    }
}

export default new AxiosService()