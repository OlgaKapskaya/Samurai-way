import s from "./DialogsMessages.module.css";

import React from "react";


type DialogsMessagesProps = {
    message: string
}
export const DialogsMessages = (props: DialogsMessagesProps) => {
    return (
        <>
            <div className={s.messageContainer}>
                <span className={s.message}>{props.message}</span>
            </div>
        </>
    )
}