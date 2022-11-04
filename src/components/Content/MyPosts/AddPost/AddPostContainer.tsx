import React from "react";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../../redux/profileReduser";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/store";
import {dispatchType} from "../../../../redux/redux-store";

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