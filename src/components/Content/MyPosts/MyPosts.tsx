import React from "react";
import {PostComponent} from "./Posts/PostComponent";
import content from "../MyPosts.module.css"
import {AddPost} from "./AddPost/AddPost";

export type MyPostsProps = {
    postData: Array<PostDataType>
    addPost: (post:string) => void
    addLike: (id: string, count: number) => void
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
                    <PostComponent id={elem.id} message={elem.message} likes={elem.likes} addLike={props.addLike}/>
                )
            })}

        </>
    )
}