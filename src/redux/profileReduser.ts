import {ActionDispatchType, AddLikeActionType, AddPostActionType, ChangePostTextType, profilePageType} from "./store";
import {v1} from "uuid";


const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'

let initialState = {
    newPostText: "",
    postData: [
        {id: v1(), message: 'Hi, how are you?', likes: 3},
        {id: v1(), message: 'It\'s my first post', likes: 5},
        {id: v1(), message: 'Hi, how are you?', likes: 67},
        {id: v1(), message: 'Hi, how are you?', likes: 33},
        {id: v1(), message: 'Smile today', likes: 9},
    ]
}

export const profileReducer = (state:profilePageType = initialState, action: ActionDispatchType) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            state.postData = [newPost, ...state.postData]
            return state
        }
        case CHANGE_NEW_POST_TEXT: {
            state.newPostText = action.message
            return state
        }
        case ADD_LIKE: {
            state.postData = state.postData.map(elem => elem.id === action.id ? {...elem, likes: action.count} : elem)
            return state
        }
        default: return state}

}



//dispatch action creators
export const AddPostActionCreator = () => {return <AddPostActionType>{type: ADD_POST}}
export const ChangePostTextActionCreator = (message: string) => {
    return <ChangePostTextType>{type: CHANGE_NEW_POST_TEXT, message: message}
}
export const AddLikeActionCreator = (count: number, id: string) => {
    return <AddLikeActionType>{type: ADD_LIKE, count: count, id: id}}