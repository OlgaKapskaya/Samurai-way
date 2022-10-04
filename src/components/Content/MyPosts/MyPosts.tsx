import React from "react";
import {PostComponent} from "./Posts/PostComponent";
import content from "../MyPosts.module.css"
import {AddPost} from "./AddPost/AddPost";

export type MyPostsProps = {
    postData: Array<PostDataType>
}

export type PostDataType = {
    id: number
    message: string
    likes: number
}



export const MyPosts = (props: MyPostsProps) => {

    return (
        <>
            <AddPost/>
            {props.postData.map(elem => {
                return (
                    <PostComponent message={elem.message} likes={elem.likes}/>
                )
            })}

        </>
    )
}