import React from "react";

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
