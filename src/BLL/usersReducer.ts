import {usersPageType, UsersType} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../API/api";


const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

export type FollowUserAT = {
    type: 'FOLLOW_USER'
    userID: number
}
export type UnfollowUserAT = {
    type: 'UNFOLLOW_USER'
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
export type SetPageSizeAT = {
    type: 'SET_PAGE_SIZE'
    pageSize: number
}
export type SetTotalUserCountAT = {
    type: 'SET_TOTAL_USER_COUNT'
    count: number
}
export type ToggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type FollowingInProgressAT = {
    type: 'FOLLOWING_IN_PROGRESS'
    followingInProgress: boolean
    id: number
}

export type UserReducerAT = FollowUserAT | UnfollowUserAT
    | SetUsersAT | SetCurrentPageAT | SetPageSizeAT
    | SetTotalUserCountAT | ToggleIsFetchingAT | FollowingInProgressAT


let initialState: usersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: usersPageType = initialState, action: UserReducerAT): usersPageType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: true} : elem)
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(elem => elem.id === action.userID ? {...elem, followed: false} : elem)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.newCurrentPage}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter( elem => elem !== action.id)}
        default:
            return state
    }
}
export const FollowUserAC = (userID: number): FollowUserAT => {
    return {type: FOLLOW_USER, userID}
}
export const setUnfollowUserAC = (userID: number): UnfollowUserAT => {
    return {type: UNFOLLOW_USER, userID}
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
export const ToggleIsFetchingAC = (isFetching: boolean):ToggleIsFetchingAT => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const SetPageSizeAC = (pageSize: number):SetPageSizeAT => {
    return {type: SET_PAGE_SIZE, pageSize}
}
export const followingInProgressAC = (followingInProgress: boolean, id: number):FollowingInProgressAT => {
    return {type: FOLLOWING_IN_PROGRESS, followingInProgress, id}
}


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UserReducerAT>) => {
    dispatch(ToggleIsFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {

            dispatch(ToggleIsFetchingAC(false))
            dispatch(SetUsersAC(response.items))
            dispatch(SetCurrentPageAC(currentPage))
            dispatch(SetTotalUserCountAC(response.totalCount))
        })
}

export const setFollowTC = (userID: number) => (dispatch: Dispatch<UserReducerAT>) => {
    dispatch(followingInProgressAC(true, userID))
    usersAPI.setFollow(userID)
        .then( response => {
            if (response === 0){
                dispatch(FollowUserAC(userID))
            }
            dispatch(followingInProgressAC(false, userID))
        })
}

export const setUnFollowTC = (userID: number) => (dispatch: Dispatch<UserReducerAT>) => {
    dispatch(followingInProgressAC(true, userID))
    usersAPI.setUnfollow(userID)
        .then( response => {
            if (response === 0){
                dispatch(setUnfollowUserAC(userID))
            }
            dispatch(followingInProgressAC(false, userID))
        })
}