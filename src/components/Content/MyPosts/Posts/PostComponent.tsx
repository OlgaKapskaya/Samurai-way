import React from "react";
import post from "./PostCompponent.module.css"
import {IconButton} from "@material-ui/core";
import {FavoriteBorder} from "@material-ui/icons";
import noAvatarImg from "../../../../IMG/no_avatar_img.webp";


type PostComponentProps = {
    id: string
    message: string
    likes: number
    userName: string
    userAvatar: string
    addLike: (count: number, id: string) => void
}


const PostComponent = (props: PostComponentProps) => {
    const onClickLikeHandler = () => {
        let count = props.likes+1
        props.addLike(count, props.id)
    }

    return (
        <div className={post.post}>
            <div className={post.avatarAndName}>
                <img className={post.avatar}
                     src={props.userAvatar !== null ? props.userAvatar : noAvatarImg}
                     alt={'avatar'}/>
                <h5>{props.userName}</h5>
            </div>
            <span className={post.message}> {props.message}</span>
            <div className={post.likes}>
                <IconButton onClick={onClickLikeHandler} size={'small'}>
                    <FavoriteBorder color={'primary'}/>
                </IconButton>
                <span> {props.likes}</span>

            </div>

        </div>
        )

}
export const PostComponentContainer = React.memo(PostComponent)
