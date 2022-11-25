import axios from "axios";

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
    },
    setFollow(userID: number) {
        return instance.post(`follow/${userID}`, {})
            .then(response => response.data.resultCode)
    },
    setUnfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data.resultCode)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('/auth/me')
            .then(response => response.data)
    }
}



