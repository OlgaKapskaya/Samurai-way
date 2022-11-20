import {StateType, UsersType} from "../../BLL/store";
import {connect} from "react-redux";
import {
    FollowUserAC,
    SetCurrentPageAC, SetPageSizeAC,
    SetTotalUserCountAC, setUnfollowUserAC,
    SetUsersAC,
    ToggleIsFetchingAC,
} from "../../BLL/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/api";


type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setPageSize: (pageSize: number) => void
    setTotalUserCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type FindUsersProps = mapStateToPropsType & mapDispatchToPropsType


class FindUsersAPIComponent extends React.Component<FindUsersProps> { //React.Component<PROPS_Type, COMPONENT_LOCAL_STATE_Type>
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {

                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUserCount(response.totalCount)
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
                                                  setUnfollow={this.props.setUnfollow}
                                                  setFollow={this.props.setFollow}/>}
            </>
        )
    }

    onPageChanged = (newPageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(newPageNumber)
        usersAPI.getUsers(newPageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
            })
    }
}


const mapStateToProps = (state: StateType): mapStateToPropsType => {
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
    toggleIsFetching: ToggleIsFetchingAC,
    setPageSize: SetPageSizeAC,
    setUnfollow: setUnfollowUserAC
} as mapDispatchToPropsType)(FindUsersAPIComponent)
