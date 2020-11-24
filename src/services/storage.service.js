class StorageService {
    _getAuth() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            token: localStorage.getItem('token'),
            rToken: localStorage.getItem('rToken')
        }
    }

    _setAuth(params) {
        localStorage.setItem('user', JSON.stringify(params.user))
        localStorage.setItem('token', params.token)
        localStorage.setItem('rToken', params.rToken)
    }

    _clearAuth() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('rToken')
    }
}

export default new StorageService()