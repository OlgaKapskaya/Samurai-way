import {stateType} from "../redux-store";

export const getUsers = (state: stateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: stateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: stateType) => {
    return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: stateType) => {
    return state.usersPage.totalUsersCount
}
export const getUsersIsFetching = (state: stateType) => {
    return state.usersPage.isFetching
}
export const getUserFollowingInProgress = (state: stateType) => {
    return state.usersPage.followingInProgress
}