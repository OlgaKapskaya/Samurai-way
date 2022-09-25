import React from "react";
import c from "./AddPost.module.css";

export const AddPost = () => {
    return (
        <div className={c.postContainer}>
            <h3 className={c.myPosts}>My posts</h3>
            <div className={c.newPost}>New post</div>
            <div><textarea className={c.inputTextArea} rows={3}/></div>
            <div><button className={c.button}>Send</button></div>
        </div>
    )
}