import React, {ChangeEvent, useState} from 'react';
import s from "./Dialogs.module.css"
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {Button, TextField} from "@material-ui/core";


export type DialogsProps = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    sendMessage: (message: string) => void
}
export type DialogsDataType = {
    id: string
    name: string
    avatar: string
}
export type MessagesDataType = {
    id: string
    message: string
    avatar?: string
}
export const Dialogs = (props: DialogsProps) => {
    const [message, setMessage] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    }
    const sendMessageHandler = () => {
        if (message.trim() !== '') {
            props.sendMessage(message)
            setMessage('');
        }

    }
    return (
        <div className={"content"}>
            <div className={s.dialogsContainer}>

                <div className={s.sidebar}>

                </div>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {props.dialogsData.map(elem => {
                            return (
                                <DialogsItems id={elem.id} name={elem.name} avatar={elem.avatar} key={elem.id}/>
                            )
                        })}

                    </div>
                    <div className={s.dialogsMessages}>
                        {props.messagesData.map(elem => {
                            return (
                                <DialogsMessages
                                    message={elem.message}
                                    avatar={elem.avatar}
                                    key={elem.id}
                                />
                            )
                        })}
                    </div>
                    <div className={s.addDialogContainer}>
                        <TextField value={message}
                                   onChange={onChangeHandler}
                                   variant={'outlined'}
                                   color={'primary'}
                                   label={'Enter message text'}
                                   style={{margin: '10px'}}/>
                    <div className={s.buttonContainer}>
                        <Button onClick={sendMessageHandler}
                                size={'small'}
                                variant={'outlined'}
                                color={'primary'}>
                            SEND</Button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}