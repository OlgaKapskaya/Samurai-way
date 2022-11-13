import {StateType, UsersType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
import {connect} from "react-redux";
import {FollowUserAC, SetCurrentPageAC, SetTotalUserCountAC, SetUsersAC} from "../../BLL/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUserCount: (count: number) => void
}
type FindUsersProps = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUserCount: (count: number) => void
}
type FindUsersStateType = {}
class FindUsersAPIComponent extends React.Component<FindUsersProps, FindUsersStateType> { //React.Component<PROPS_Type, COMPONENT_LOCAL_STATE_Type>
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }
    render() {
        return (
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   setFollow={this.props.setFollow}/>
        )
    }
    onPageChanged = (newPageNumber: number) => {
        this.props.setCurrentPage(newPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }
}


let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: dispatchType): mapDispatchToPropsType => {
    return {
        setFollow: (userID: number) => dispatch(FollowUserAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users)),
        setCurrentPage: (newCurrentPage: number) => dispatch(SetCurrentPageAC(newCurrentPage)),
        setTotalUserCount: (count: number) => dispatch(SetTotalUserCountAC(count))
    }
}
export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIComponent)

