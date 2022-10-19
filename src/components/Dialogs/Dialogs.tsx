import React, {ChangeEvent, useState} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {ActionDispatchType} from "../../redux/state";

export type DialogsProps = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    dispatch: (action: ActionDispatchType) => void
}
export type DialogsDataType = {
    id: string
    name: string
    avatar: string
}
export type MessagesDataType = {
    id: string
    message: string
    avatar: string
}
export const Dialogs = (props: DialogsProps) => {
    const [message, setMessage] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }
    const sendMessageHandler = () => {
        if (message.trim() !== ''){
            props.dispatch({type: "ADD-MESSAGE", message: message})
            //props.sendMessage(message);
            setMessage('');
        }

    }
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
                            <DialogsMessages
                                message={elem.message}
                                avatar={elem.avatar}
                            />
                        )
                    })}
                </div>
                <div className={s.addDialogContainer}>
                    <textarea className={s.messageInput}
                              value={message}
                              onChange={onChangeHandler}
                    >

                    </textarea>
                    <button
                        className={s.button}
                        onClick={sendMessageHandler}>

                        SEND
                    </button>
                </div>

            </div>
        </div>
    )
}