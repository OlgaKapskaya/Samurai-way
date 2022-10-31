import React, {ChangeEvent, useState} from "react";
import c from "./AddPost.module.css";
import {Button, TextField} from "@material-ui/core";

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
        if (message.trim() !== "") {
            props.addPost()
            setMessage('');
            props.changePostText("")
        } else {
            alert("Error! Add post text");
        }

    }
    return (

        <div className={c.postContainer}>
            <h3 className={c.title}>My posts</h3>
            <div>
                <TextField value={message}
                           onChange={onChangeTextHandler}
                           variant={'outlined'}
                           label={'Enter post'}
                           style={{width: '100%', marginTop: '10px'}}
                />
            </div>
            <div className={c.buttonContainer}>
                <Button onClick={addPostHandler}
                        variant={'outlined'}
                        color={'primary'}>Send</Button>
            </div>
        </div>
    )
}