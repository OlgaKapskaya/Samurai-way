import React from "react";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {PostComponentContainer} from "./Posts/PostComponentContainer";
import s from './MyPosts.module.css'

export type MyPostsProps = {
    postData: Array<PostDataType>
    newPostText: string
}

export type PostDataType = {
    id: string
    message: string
    likes: number
}


export const MyPosts = (props: MyPostsProps) => {

    return (
        <div className={s.myPostsContainer}>
                <AddPostContainer />
                {props.postData.map(elem => {
                    return (
                        <PostComponentContainer postData={elem} key={elem.id}/>

                    )
                })}
        </div>
    )
}