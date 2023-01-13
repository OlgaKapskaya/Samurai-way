import React, {FC} from "react";
import {Avatar} from "@material-ui/core";

type UserAvatarPropsType = {
    img: string
    size: number
}
export const UserAvatar: FC<UserAvatarPropsType> = ({img, size}) => {
    const avatarSize = {
        width: `${size}px`,
        height: `${size}px`,
        border: `5px solid #e9ecef`
    }
    return (
        <Avatar src={img} style={avatarSize}/>
    )
}