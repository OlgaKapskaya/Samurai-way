import {ActionDispatchType, profilePageType, ProfileUserType} from "../store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";


const ADD_POST = 'ADD-POST'
const ADD_LIKE = 'ADD-LIKE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

//action types
export type SetStatusAT = {
    type: 'SET_STATUS',
    status: string
}
export type SetUserProfileAT = {
    type: 'SET_USER_PROFILE'
    profile: ProfileUserType
}
export type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
export type AddLikeActionType = {
    type: "ADD-LIKE"
    id: string
    count: number
}

let initialState: profilePageType = {
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
    },
    status: ""
}

export const profileReducer = (state:profilePageType = initialState, action: ActionDispatchType):profilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: v1(),
                message: action.newPostText,
                likes: 0
            }
            return {...state, postData: [newPost, ...state.postData]}
        }
        case ADD_LIKE: {
            return {...state, postData: state.postData.map(elem => elem.id === action.id ? {...elem, likes: action.count} : elem)}
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default: return state}

}



//dispatch action creators
export const AddPostAC = (newPostText: string): AddPostActionType => {
    return {type: ADD_POST, newPostText}
}
export const AddLike = (count: number, id: string): AddLikeActionType => {
    return {type: ADD_LIKE, count: count, id: id}}
export const SetUserProfile = (profile: ProfileUserType): SetUserProfileAT => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatusAC = (status: string): SetStatusAT => {
    return {type: SET_STATUS, status}
}

export const getUserProfileTC = (userID: string) => (dispatch: Dispatch<ActionDispatchType>) => {
    profileAPI.getUserProfile(userID)
        .then(response => {
            dispatch(SetUserProfile(response.data))
        })
}
export const getUserStatusTC = (userID: string) => (dispatch: Dispatch<ActionDispatchType>) => {
    profileAPI.getStatus(userID)
        .then(response => {
            dispatch(setStatusAC(response.data))})
}
export const updateUserStatusTC = (status: string) => (dispatch: Dispatch<ActionDispatchType>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) dispatch(setStatusAC(status))
        })
}
