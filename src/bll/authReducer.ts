import {AuthDataType} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";

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
        id: number | null,
        login: string,
        email: string,
        isAuth: boolean
    }

}


export const authReducer = (state = initState, action: AuthReducerAT): AuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}

export const setAuthUserData = (id: number | null, login: string, email: string, isAuth: boolean = false): SetUserDataAT => {
    return {type: SET_USER_DATA, data: {id, login, email, isAuth}}
}

export const setAuthUserTC = () => (dispatch: Dispatch<AuthReducerAT>) => {
    authAPI.getAuth()
        .then( (response) => {
            if (response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<stateType, any, AuthReducerAT>) => {
    authAPI.login(email,password,rememberMe)
        .then( (response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserTC())
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<AuthReducerAT>) => {
    authAPI.logout()
        .then( response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, '', '', false))
                }
        })
}