import {AddPostAC} from "../../../../BLL/profileReduser";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {dispatchType} from "../../../../BLL/redux-store";

type  MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: dispatchType): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(AddPostAC(newPostText))
    }
}

export const AddPostContainer = connect(null, mapDispatchToProps )(AddPost)