import {StateType, UsersType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
import {connect} from "react-redux";
import {FollowUserAC, SetUsersAC} from "../../BLL/usersReducer";
import {FindUsers} from "./FindUsers";

type mapStateToPropsType = {
    users: UsersType[]
}
type mapDispatchToPropsType = {
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

let mapStateToProps = (state: StateType):mapStateToPropsType=> {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: dispatchType):mapDispatchToPropsType => {
    return {
        setFollow: (userID: number) => dispatch(FollowUserAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users))
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)