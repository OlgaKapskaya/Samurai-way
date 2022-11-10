import {ActionDispatchType, usersPageType, UsersType} from "./store";

const FOLLOW_USER = 'FOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

export type FollowUserAT = {
    type: 'FOLLOW_USER'
    userID: number
}
export type SetUsersAT = {
    type: 'SET_USERS'
    users: UsersType[]
}
export type SetCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    newCurrentPage: number
}
export type SetTotalUserCountAT = {
    type: 'SET_TOTAL_USER_COUNT'
    count: number
}
let initialState: usersPageType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: usersPageType = initialState, action: ActionDispatchType): usersPageType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: !elem.followed} : elem)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.newCurrentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.count}
        default:
            return state
    }
}
export const FollowUserAC = (userID: number): FollowUserAT => {
    return {type: FOLLOW_USER, userID}
}
export const SetUsersAC = (users: UsersType[]): SetUsersAT => {
    return {type: SET_USERS, users}
}
export const SetCurrentPageAC = (newCurrentPage: number):SetCurrentPageAT => {
    return {type: SET_CURRENT_PAGE, newCurrentPage}
}
export const SetTotalUserCountAC = (count: number): SetTotalUserCountAT => {
    return {type: SET_TOTAL_USER_COUNT, count}
}