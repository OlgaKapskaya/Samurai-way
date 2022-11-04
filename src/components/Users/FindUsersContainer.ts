import {StateType, UsersType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../BLL/profileReduser";
import {connect} from "react-redux";
import {FindUsers} from "./FindUsers";
import {FollowUserAC, SetUsersAC} from "../../BLL/usersReducer";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        setFollow: (userID: string) => dispatch(FollowUserAC(userID)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users))
    }
}

export const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)