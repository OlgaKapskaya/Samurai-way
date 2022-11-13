import {AddPostAC, ChangePostText} from "../../../../BLL/profileReduser";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {StateType} from "../../../../BLL/store";
import {dispatchType} from "../../../../BLL/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        addPost: () => dispatch(AddPostAC()),
        changePostText: (text: string) => dispatch(ChangePostText(text))
    }
}

export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)