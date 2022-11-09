import {StateType, usersPageType, UsersType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
import {connect} from "react-redux";
import {FindUsers} from "./FindUsers";
import {FollowUserAC, SetUsersAC} from "../../BLL/usersReducer";

type mapStateToPropsType = {
    users: usersPageType
}
type mapDispatchToPropsType = {
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

let mapStateToProps = (state: StateType):mapStateToPropsType=> {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: dispatchType):mapDispatchToPropsType => {
    return {
        setFollow: (userID: number) => dispatch(FollowUserAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users))
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)