import React from "react";
import post from "./PostCompponent.module.css"

type PostComponentProps = {
    text: string,
}

export const PostComponent = (props: PostComponentProps) => {
    return (
        <div className={post.post}>
            <img className={post.avatar} src={"https://img.freepik.com/free-icon/jpg-extension_318-1831.jpg?w=360"}/>
            <span className={post.message}> {props.text}</span>

        </div>
        )

}
