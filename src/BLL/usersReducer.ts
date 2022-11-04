import {ActionDispatchType, usersPageType, UsersType} from "./store";
const FOLLOW_USER = 'FOLLOW_USER'
const SET_USERS = 'SET_USERS'


export type FollowUserAT = {
    type: 'FOLLOW_USER'
    userID: string
}
export type SetUsersAT = {
    type: 'SET_USERS'
    users: UsersType[]
}
let initialState: usersPageType = {users: []}

export const usersReducer = (state: usersPageType = initialState, action: ActionDispatchType): usersPageType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {...state, users: state.users.map(elem => elem.userID === action.userID ? {...elem, followed: !elem.followed} : elem)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default: return state
    }
}
export const FollowUserAC = (userID: string): FollowUserAT => {
    return {type: FOLLOW_USER, userID}
}
export const SetUsersAC = (users: UsersType[]): SetUsersAT => {
    return {type: SET_USERS, users}
}