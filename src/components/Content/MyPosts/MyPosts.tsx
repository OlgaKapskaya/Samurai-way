import React from "react";
import {PostComponent} from "./Posts/PostComponent";
import content from "../MyPosts.module.css"
import {AddPost} from "./AddPost/AddPost";

export const MyPosts = () => {
    return (
        <>
            <AddPost/>
            <PostComponent message={"Hi, how are you?"} likes={3}/>
            <PostComponent message={"It's my first post"} likes={2}/>
            <PostComponent message={"Post3"} likes={0}/>
        </>
    )
}