import axios from "axios";

export type ResponseType<D = {}> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a3689f8d-4bdb-4cdd-9a1a-83733437adfc"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        const payload = {email, password, rememberMe}
        return instance.post<ResponseType>('auth/login', payload)
    },
    logout() {
        return instance.delete('auth/login')
    },
}
export const profileAPI = {
    setFollow(userID: number) {
        return instance.post(`follow/${userID}`, {})
            .then(response => response.data.resultCode)
    },
    setUnfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data.resultCode)
    },
    getUserProfile(userID: string) {
        if (!userID) userID = '26580'
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID: string) {
        if (!userID) userID = '26580'
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}




