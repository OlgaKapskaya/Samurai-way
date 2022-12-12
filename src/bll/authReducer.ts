import {AuthDataType} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

const initState:AuthDataType = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

export type AuthReducerAT = SetUserDataAT
export type SetUserDataAT = {
    type: 'SET_USER_DATA'
    data: {
        id: number,
        login: string,
        email: string,
    }

}


export const authReducer = (state = initState, action: AuthReducerAT): AuthDataType => {
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

export const setAuthUserTC = () => (dispatch: Dispatch<AuthReducerAT>) => {
    authAPI.getAuth()
        .then( response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}