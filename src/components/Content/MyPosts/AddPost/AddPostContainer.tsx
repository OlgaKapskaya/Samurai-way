import {AddPostAC} from "../../../../bll/profileReduser";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {AppDispatchType} from "../../../../bll/redux-store";

type  MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(AddPostAC(newPostText))
    }
}

export const AddPostContainer = connect(null, mapDispatchToProps )(AddPost)