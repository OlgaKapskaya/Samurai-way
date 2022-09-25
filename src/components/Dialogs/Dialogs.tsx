import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";

export const Dialogs = () => {
    return (
        <div className={"content"}>
            <div className={s.dialogs}>
                <DialogsItems/>
                <div className={s.dialogsMessages}>
                    <DialogsMessages/>
                    <DialogsMessages/>
                    <DialogsMessages/>
                    <DialogsMessages/>
                </div>
            </div>
        </div>
    )
}