import {StateType} from "../../../BLL/store";
import {dispatchType} from "../../../BLL/redux-store";
import {AddLikeActionCreator} from "../../../BLL/profileReduser";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

let mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        userName: state.user.name
    }
}

let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        addLike: (count: number, id: string) => dispatch(AddLikeActionCreator(count, id)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)