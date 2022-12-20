import {StateType} from "../../../bll/store";
import {AppDispatchType} from "../../../bll/redux-store";
import {AddLike} from "../../../bll/profileReduser";
import {connect} from "react-redux";
import {MyPostsComponent, PostDataType} from "./MyPosts";

type mapStateToPropsType = {
    postData: PostDataType[]
    userName: string
    userAvatar: string
}
type mapDispatchToPropsType  = {
    addLike: (count: number, id: string) => void
}

let mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        userName: state.profilePage.profile.fullName,
        userAvatar: state.profilePage.profile.photos.small
    }
}

let mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {
    return {
        addLike: (count: number, id: string) => dispatch(AddLike(count, id)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsComponent)