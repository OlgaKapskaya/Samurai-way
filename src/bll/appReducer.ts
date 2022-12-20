import {setAuthUserTC} from "./authReducer";
import {AppDispatchType} from "./redux-store";

const SET_INITIALIZED = 'SET_INITIALIZED'

export type AppReducerAT = SetInitializedAT

type SetInitializedAT = ReturnType<typeof setInitializedSuccessAC>

const initState = {
    initialized: false
}
type AppDataType = typeof initState

export const appReducer = (state: AppDataType = initState, action: AppReducerAT): AppDataType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitializedSuccessAC = () => {
    return {type: SET_INITIALIZED} as const
}
export const initializeApp = () => (dispatch: AppDispatchType) => {
    Promise.all([dispatch(setAuthUserTC())])
        .then(() => {
            dispatch(setInitializedSuccessAC())
        })


}