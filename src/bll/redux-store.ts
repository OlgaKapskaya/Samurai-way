import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReduser";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import {ActionDispatchType} from "./store";
import {useDispatch} from "react-redux";
import {appReducer} from "./appReducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type stateType = ReturnType<typeof rootReducer> // типизация того,что наш стор вернет
export type storeType = typeof store // типизация самого стора
export type AppDispatchType = ThunkDispatch<stateType, any, ActionDispatchType>
export const useAppDispatch: () => AppDispatchType = useDispatch