import React from "react";
import {AddPostContainer} from "./AddPost/AddPostContainer";
import {PostComponentContainer} from "./Posts/PostComponentContainer";

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
        <>
                <AddPostContainer />
                {props.postData.map(elem => {
                    return (
                        <PostComponentContainer postData={elem} key={elem.id}/>

                    )
                })}
        </>
    )
}