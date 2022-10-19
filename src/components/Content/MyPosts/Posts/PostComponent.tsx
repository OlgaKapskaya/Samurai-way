import React from "react";
import post from "./PostCompponent.module.css"
import likefill from "./img/like_fill.png"
import {ActionDispatchType, AddLikeActionCreator} from "../../../../redux/state";

type PostComponentProps = {
    id: string
    message: string
    likes: number
    dispatch: (action: ActionDispatchType) => void
}

export const PostComponent = (props: PostComponentProps) => {


    const onClickLikeHandler = () => {
        let count = props.likes+1
        props.dispatch(AddLikeActionCreator(count, props.id))
        console.log(count)
    }
    return (
        <div className={post.post}>
            <img className={post.avatar} src={"https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg"}/>
            <span className={post.message}> {props.message}</span>
            <div className={post.likes}>
                <img className={post.likeimg} src={likefill} onClick={onClickLikeHandler}/>
                <span> {props.likes}</span>

            </div>

        </div>
        )

}
