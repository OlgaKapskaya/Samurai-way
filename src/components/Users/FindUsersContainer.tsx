import {StateType, UsersType} from "../../BLL/store";
import {connect} from "react-redux";
import {
    getUsersTC,
    SetCurrentPageAC, setFollowTC, SetPageSizeAC, setUnFollowTC,

} from "../../BLL/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


type mapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type mapDispatchToPropsType = {
    setCurrentPage: (newCurrentPage: number) => void
    setPageSize: (pageSize: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    setFollowTC: (userID: number) => void
    setUnFollowTC: (userID: number) => void
}
type FindUsersProps = mapStateToPropsType & mapDispatchToPropsType


class FindUsersAPIComponent extends React.Component<FindUsersProps> { //React.Component<PROPS_Type, COMPONENT_LOCAL_STATE_Type>
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                {!this.props.isFetching && <Users users={this.props.users}
                                                  totalUsersCount={this.props.totalUsersCount}
                                                  pageSize={this.props.pageSize}
                                                  followingInProgress={this.props.followingInProgress}
                                                  onPageChanged={this.onPageChanged}
                                                  currentPage={this.props.currentPage}
                                                  setFollowTC={this.props.setFollowTC}
                                                  setUnFollowTC={this.props.setUnFollowTC}/>}
            </>
        )
    }

    onPageChanged = (newPageNumber: number) => {
        this.props.getUsersTC(newPageNumber, this.props.pageSize)
    }
}


const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const FindUsersContainer = connect(mapStateToProps, {
    setCurrentPage: SetCurrentPageAC,
    setPageSize: SetPageSizeAC,
    getUsersTC: getUsersTC,
    setFollowTC: setFollowTC,
    setUnFollowTC: setUnFollowTC

} as mapDispatchToPropsType)(FindUsersAPIComponent)
