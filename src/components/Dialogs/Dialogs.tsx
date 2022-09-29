import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";

export type DialogsProps = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
export type DialogsDataType = {
    id: number
    name: string
    avatar: string
}
export type MessagesDataType = {
    id: number
    message: string
    avatar: string
}
export const Dialogs = (props: DialogsProps) => {

    return (
        <div className={"content"}>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {props.dialogsData.map(elem => {
                        return (
                            <DialogsItems id={elem.id} name={elem.name} avatar={elem.avatar}/>
                        )
                    })}

                </div>
                <div className={s.dialogsMessages}>

                    {props.messagesData.map(elem => {
                        return (
                            <DialogsMessages message={elem.message} avatar={elem.avatar}/>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}