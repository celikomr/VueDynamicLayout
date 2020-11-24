import axios from 'axios'
import config from '@/config/config'
import StorageService from '@/services/storage.service'

class AuthService {
    baseUrl = ''

    constructor() {
        this.baseUrl = config.url
    }

    async _login(params) {
        return await axios({
            method: 'post',
            url: this.baseUrl + 'auth/login',
            data: params,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
        }).then(response => {
            if (response.data.token) {
                StorageService._setAuth(response.data)
            }

            return response.data
        })
    }

    _logout() {
        StorageService._clearAuth()
    }

    async _register(params) {
        return await axios({
            method: 'post',
            url: this.baseUrl + 'auth/register',
            data: params,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
        }).then(response => {
            return response.data
        })
    }
}

export default new AuthService()