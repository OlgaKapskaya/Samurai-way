import React from "react";
import "../CSS-modules/PostComponent.css"

type PostComponentProps = {
    text: string,
}

export const PostComponent = (props: PostComponentProps) => {
    return (
        <div className={"post"}>
            {props.text}
        </div>
        )

}
