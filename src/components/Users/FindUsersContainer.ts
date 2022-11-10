import {StateType, usersPageType, UsersType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
import {connect} from "react-redux";
import {FollowUserAC, SetCurrentPageAC, SetTotalUserCountAC, SetUsersAC} from "../../BLL/usersReducer";
import {FindUsers} from "./FindUsers";

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

let mapStateToProps = (state: StateType):mapStateToPropsType=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: dispatchType):mapDispatchToPropsType => {
    return {
        setFollow: (userID: number) => dispatch(FollowUserAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users)),
        setCurrentPage: (newCurrentPage: number) => dispatch(SetCurrentPageAC(newCurrentPage)),
        setTotalUserCount: (count: number) => dispatch(SetTotalUserCountAC(count))
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)