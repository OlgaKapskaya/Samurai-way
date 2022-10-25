import React from "react";
import post from "./PostCompponent.module.css"
import likefill from "./img/like_fill.png"
import {AddLikeActionCreator} from "../../../../redux/profileReduser";
import {ActionDispatchType} from "../../../../redux/store";
import {PostComponent} from "./PostComponent";
import {PostDataType} from "../MyPosts";

type PostComponentProps = {
    postData: PostDataType
    dispatch: (action: ActionDispatchType) => void
}

export const PostComponentContainer = (props: PostComponentProps) => {

    return (
        <PostComponent id={props.postData.id}
                       message={props.postData.message}
                       likes={props.postData.likes}
                       addLike={(count, id) => props.dispatch(AddLikeActionCreator(count, id))}/>
        )

}
