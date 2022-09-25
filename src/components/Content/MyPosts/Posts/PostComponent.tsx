import React from "react";
import post from "./PostCompponent.module.css"
import like from "./img/like.png"
import likefill from "./img/like_fill.png"

type PostComponentProps = {
    message: string,
    likes:number;
}

export const PostComponent = (props: PostComponentProps) => {
    return (
        <div className={post.post}>
            <img className={post.avatar} src={"https://img.freepik.com/free-icon/jpg-extension_318-1831.jpg?w=360"}/>
            <span className={post.message}> {props.message}</span>
            <div className={post.likes}>
                <img className={post.likeimg} src={likefill}/>
                <span> {props.likes}</span>

            </div>

        </div>
        )

}
