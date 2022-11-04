import React from "react";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../../BLL/profileReduser";
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
        addPost: () => dispatch(AddPostActionCreator()),
        changePostText: (text: string) => dispatch(ChangePostTextActionCreator(text))
    }
}

export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)