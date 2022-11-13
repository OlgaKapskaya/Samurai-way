import {StateType} from "../../../BLL/store";
import {dispatchType} from "../../../BLL/redux-store";
import {AddLike} from "../../../BLL/profileReduser";
import {connect} from "react-redux";
import {MyPostsComponent, PostDataType} from "./MyPosts";

type mapStateToPropsType = {
    postData: PostDataType[]
    newPostText: string
}
type mapDispatchToPropsType  = {
    addLike: (count: number, id: string) => void
}

let mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: dispatchType): mapDispatchToPropsType => {
    return {
        addLike: (count: number, id: string) => dispatch(AddLike(count, id)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsComponent)