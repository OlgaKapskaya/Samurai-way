import {StateType} from "../../../BLL/store";
import {dispatchType} from "../../../BLL/redux-store";
import {AddLikeActionCreator} from "../../../BLL/profileReduser";
import {connect} from "react-redux";
import {MyPostsComponent, PostDataType} from "./MyPosts";

type mapStateToPropsType = {
    postData: PostDataType[]
    newPostText: string
    userName: string
}
type mapDispatchToPropsType  = {
    addLike: (count: number, id: string) => void
}

let mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        userName: state.user.name
    }
}

let mapDispatchToProps = (dispatch: dispatchType): mapDispatchToPropsType => {
    return {
        addLike: (count: number, id: string) => dispatch(AddLikeActionCreator(count, id)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsComponent)