import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReduser";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type stateType = ReturnType<typeof rootReducer> // типизация того,что наш стор вернет
export type storeType = typeof store // типизация самого стора
export type dispatchType = typeof store.dispatch