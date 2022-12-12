import {AddPostAC} from "../../../../bll/profileReduser";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {dispatchType} from "../../../../bll/redux-store";

type  MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: dispatchType): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(AddPostAC(newPostText))
    }
}

export const AddPostContainer = connect(null, mapDispatchToProps )(AddPost)