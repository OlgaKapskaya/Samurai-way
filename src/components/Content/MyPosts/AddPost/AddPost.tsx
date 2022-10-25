import React, {ChangeEvent, useState} from "react";
import c from "./AddPost.module.css";

type AddPostProps = {
    newPostText: string
    addPost: () => void
    changePostText: (text: string) => void

}

export const AddPost = (props: AddPostProps) => {

    const [message, setMessage] = useState<string>(props.newPostText)
    const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
        props.changePostText(event.currentTarget.value)
    }

    const addPostHandler = () => {
        if (message.trim() !== ""){
            props.addPost()
            setMessage('');
            props.changePostText("")
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