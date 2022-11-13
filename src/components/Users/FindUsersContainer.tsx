import {StateType, UsersType} from "../../BLL/store";
import {connect} from "react-redux";
import {
    FollowUserAC,
    SetCurrentPageAC,
    SetTotalUserCountAC,
    SetUsersAC,
    ToggleIsFetchingAC,
} from "../../BLL/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    setFollow: () => ReturnType<typeof FollowUserAC>
    setUsers: () => ReturnType<typeof SetUsersAC>
    setCurrentPage: () => ReturnType<typeof SetCurrentPageAC>
    setTotalUserCount: () => ReturnType<typeof SetTotalUserCountAC>
    toggleIsFetching: () => ReturnType<typeof ToggleIsFetchingAC>
}
type FindUsersProps = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUserCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type FindUsersStateType = {}

class FindUsersAPIComponent extends React.Component<FindUsersProps, FindUsersStateType> { //React.Component<PROPS_Type, COMPONENT_LOCAL_STATE_Type>
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                {!this.props.isFetching && <Users users={this.props.users}
                                                  totalUsersCount={this.props.totalUsersCount}
                                                  pageSize={this.props.pageSize}
                                                  onPageChanged={this.onPageChanged}
                                                  currentPage={this.props.currentPage}
                                                  setFollow={this.props.setFollow}/>}
            </>
        )
    }

    onPageChanged = (newPageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(newPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
}


let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const FindUsersContainer = connect(mapStateToProps, {
    setFollow: FollowUserAC,
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalUserCount: SetTotalUserCountAC,
    toggleIsFetching: ToggleIsFetchingAC
} as mapDispatchToPropsType)(FindUsersAPIComponent)
