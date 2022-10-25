import React from "react";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../../redux/profileReduser";
import {ActionDispatchType} from "../../../../redux/store";
import {AddPost} from "./AddPost";

type AddPostProps = {
    dispatch: (action: ActionDispatchType) => void
    newPostText: string

}


export const AddPostContainer = (props: AddPostProps) => {
    const addPost = () => {
        props.dispatch(AddPostActionCreator())
    }
    const changePostText = (text: string) => {
        props.dispatch(ChangePostTextActionCreator(text))
    }
    return (
        <AddPost addPost={ addPost }
                 changePostText={ changePostText }
                 newPostText={ props.newPostText }/>
    )
}
