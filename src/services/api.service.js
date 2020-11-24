import axios from 'axios'
import config from '@/config/config'

class ApiService {
    baseUrl = ''

    constructor() {
        this.baseUrl = config.url
    }

    async _get(params, url) {
        return await axios({
            method: 'get',
            url: this.baseUrl + url,
            params: params
        }).then(response => {
            return response.data
        })
    }

    async _getAll(url) {
        return await axios({
            method: 'get',
            url: this.baseUrl + url,
        }).then(response => {
            return response.data
        })
    }

    async _post(params, url) {
        return await axios({
            method: 'post',
            url: this.baseUrl + url,
            data: params,
        }).then(response => {
            return response.data
        })
    }

    async _put(params, url) {
        return await axios({
            method: 'put',
            url: this.baseUrl + url,
            data: params,
        }).then(response => {
            return response.data
        })
    }

    async _delete(params, url) {
        return await axios({
            method: 'delete',
            url: this.baseUrl + url,
            params: params
        }).then(response => {
            return response.data
        })
    }
}

export default new ApiService()