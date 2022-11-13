import {ActionDispatchType, profilePageType, ProfileUserType} from "./store";
import {v1} from "uuid";


const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

//action types
export type SetUserProfileAT = {
    type: 'SET_USER_PROFILE'
    profile: ProfileUserType
}
export type AddPostActionType = {
    type: "ADD-POST"
}
export type ChangePostTextType = {
    type: "CHANGE-NEW-POST-TEXT"
    message: string
}
export type AddLikeActionType = {
    type: "ADD-LIKE"
    id: string
    count: number
}

let initialState: profilePageType = {
    newPostText: "",
    postData: [
        {id: v1(), message: 'Hi, how are you?', likes: 3},
        {id: v1(), message: 'It\'s my first post', likes: 5},
        {id: v1(), message: 'Hi, how are you?', likes: 67},
        {id: v1(), message: 'Hi, how are you?', likes: 33},
        {id: v1(), message: 'Smile today', likes: 9},
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    }
}

export const profileReducer = (state:profilePageType = initialState, action: ActionDispatchType):profilePageType => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            return {...state, postData: [newPost, ...state.postData]}
        }
        case CHANGE_NEW_POST_TEXT: {
            let newState = {...state}
            newState.newPostText = action.message
            return newState
        }
        case ADD_LIKE: {
            return {...state, postData: state.postData.map(elem => elem.id === action.id ? {...elem, likes: action.count} : elem)}
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default: return state}

}



//dispatch action creators
export const AddPostAC = (): AddPostActionType => {return {type: ADD_POST}}
export const ChangePostText = (message: string): ChangePostTextType => {
    return {type: CHANGE_NEW_POST_TEXT, message: message}
}
export const AddLike = (count: number, id: string): AddLikeActionType => {
    return {type: ADD_LIKE, count: count, id: id}}
export const SetUserProfile = (profile: ProfileUserType): SetUserProfileAT => {
    return {type: SET_USER_PROFILE, profile}
}