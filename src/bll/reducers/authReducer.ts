import {ActionDispatchType, AuthDataType} from "../store";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {stateType} from "../redux-store";
import {ThunkDispatch} from "redux-thunk";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA'

const initState: AuthDataType = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

export type AuthReducerAT = SetUserDataAT
export type SetUserDataAT = {
    type: 'AUTH/SET_USER_DATA'
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
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, login: string, email: string, isAuth: boolean = false): SetUserDataAT => {
    return {type: SET_USER_DATA, data: {id, login, email, isAuth}}
}

export const setAuthUserTC = () => async (dispatch: Dispatch<AuthReducerAT>) => {
    const response = await authAPI.getAuth()
            if (response.resultCode === 0) {
                const {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email, true))
            }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<stateType, any, ActionDispatchType | FormAction>) => {
    const response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserTC())
            } else {
                console.log(response.data.fieldsErrors)
                dispatch(stopSubmit('login', {_error: response.data.fieldsErrors[0].error}))
            }
}
export const logoutTC = () => async (dispatch: Dispatch<AuthReducerAT>) => {
    const response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, '', '', false))
            }
}