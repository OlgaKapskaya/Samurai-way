import {ActionDispatchType, AddMessageActionType, dialogsPageType, StateType} from "./store";
import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
export const dialogsReducer = (state: dialogsPageType, avatar: string, action: ActionDispatchType) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage = {
                id: v1(),
                message: action.message,
                avatar: avatar
            };
            state.messagesData = [...state.messagesData, newMessage];
            return state
        }
        default:
            return state
    }
}

//dispatch action creators
export const AddMessageActionCreator = (message: string) => {return <AddMessageActionType>{type: ADD_MESSAGE, message: message}}