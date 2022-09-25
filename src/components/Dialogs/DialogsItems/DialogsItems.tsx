import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import post from "../../Content/MyPosts/Posts/PostCompponent.module.css";

type DialogsItemsProps = {
    id: number
    name: string
    avatar: string
}

export const DialogsItems = (props: DialogsItemsProps) => {
    return (
        <div className={s.dialogsItems}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.link}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>

        </div>
    )
}
