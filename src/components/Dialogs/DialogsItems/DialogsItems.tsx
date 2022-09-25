import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogsItems = () => {
    return (
        <div className={s.dialogsItems}>
            <NavLink to={'/dialogs/id'}>Names</NavLink>
        </div>
    )
}
