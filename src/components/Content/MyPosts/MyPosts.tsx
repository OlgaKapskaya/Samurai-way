import React from "react";
import {PostComponent} from "./Posts/PostComponent";
import {AddPost} from "./AddPost/AddPost";
import {ActionDispatchType} from "../../../redux/store";

export type MyPostsProps = {
    postData: Array<PostDataType>
    dispatch: (action: ActionDispatchType) => void
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
            <AddPost
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
            {props.postData.map(elem => {
                return (
                    <PostComponent
                        id={elem.id}
                        message={elem.message}
                        likes={elem.likes}
                        dispatch={props.dispatch}
                    />
                )
            })}

        </>
    )
}