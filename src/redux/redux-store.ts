import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReduser";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./userReducer";



let reducers= combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    user: userReducer
})
export let store = createStore(reducers);

export type stateType = ReturnType<typeof reducers> // типизация того,что наш стор вернет
export type storeType = typeof store // типизация самого стора
export type dispatchType = typeof store.dispatch