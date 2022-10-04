import React, {ChangeEvent, useRef, useState} from "react";
import c from "./AddPost.module.css";

export const AddPost = () => {
    const [message, setMessage] = useState<string>('')

    const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }

    const addPostHandler = () => {
        if (message.trim() !== ""){
            alert(message);
            setMessage('');
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