import React from "react";
import post from "./PostCompponent.module.css"
import likefill from "./img/like_fill.png"


type PostComponentProps = {
    id: string
    message: string
    likes: number
    addLike: (count: number, id: string) => void
}

export const PostComponent = (props: PostComponentProps) => {


    const onClickLikeHandler = () => {
        let count = props.likes+1
        props.addLike(count, props.id)
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
