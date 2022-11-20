import {ActionDispatchType, AuthDataType} from "./store";

const SET_USER_DATA = 'SET_USER_DATA'

const initState:AuthDataType = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

export type SetUserDataAT = {
    type: 'SET_USER_DATA'
    data: {
        id: number,
        login: string,
        email: string,
    }

}

export const authReducer = (state = initState, action: ActionDispatchType): AuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default: return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string): SetUserDataAT => {
    return {type: SET_USER_DATA, data: {id, login, email}}
}