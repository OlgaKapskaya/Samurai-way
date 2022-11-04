import React from "react";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import s from './MyPosts.module.css'
import {PostComponent} from "./Posts/PostComponent";

export type MyPostsProps = {
    postData: Array<PostDataType>
    newPostText: string
    userName: string
    addLike: (count: number, id: string) => void
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
                        <PostComponent id={elem.id}
                                       message={elem.message}
                                       likes={elem.likes}
                                       userName={props.userName}
                                       addLike={props.addLike}/>

                    )
                })}
        </div>
    )
}