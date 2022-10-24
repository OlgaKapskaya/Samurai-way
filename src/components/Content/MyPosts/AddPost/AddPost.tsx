import React, {ChangeEvent, useState} from "react";
import c from "./AddPost.module.css";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../../redux/profileReduser";
import {ActionDispatchType} from "../../../../redux/store";

type AddPostProps = {
    dispatch: (action: ActionDispatchType) => void
    newPostText: string

}

export const AddPost = (props: AddPostProps) => {

    const [message, setMessage] = useState<string>(props.newPostText)
    const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
        props.dispatch(ChangePostTextActionCreator(event.currentTarget.value))
    }

    const addPostHandler = () => {
        if (message.trim() !== ""){
            props.dispatch(AddPostActionCreator())
            setMessage('');
            props.dispatch(ChangePostTextActionCreator(""));
        } else {
            alert("Error! Add post text");
        }

    }
    return (

        <div className={c.postContainer}>
            <h3 className={c.myPosts}>My posts</h3>
            <div className={c.newPost}>New post</div>
            <div>
                <textarea value={message}
                          onChange={onChangeTextHandler}
                          className={c.inputTextArea}
                          rows={3}/>
            </div>
            <div>
                <button
                    className={c.button}
                    onClick={addPostHandler}>

                    Send
                </button>
            </div>
        </div>
    )
}