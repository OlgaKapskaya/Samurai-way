import React from "react";
import {PostComponent} from "./Posts/PostComponent";
import content from "../MyPosts.module.css"
import {AddPost} from "./AddPost/AddPost";

export type MyPostsProps = {
    postData: Array<PostDataType>
    addPost: (post:string) => void
}

export type PostDataType = {
    id: string
    message: string
    likes: number
}



export const MyPosts = (props: MyPostsProps) => {

    return (
        <>
            <AddPost addPost={props.addPost}/>
            {props.postData.map(elem => {
                return (
                    <PostComponent message={elem.message} likes={elem.likes}/>
                )
            })}

        </>
    )
}