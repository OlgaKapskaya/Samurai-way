import React from 'react';
import {AddMessageActionCreator} from "../../redux/dialogsReducer";
import {ActionDispatchType, StateType, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

export type DialogsContainerProps = {
    state: StateType
    dispatch: (action: ActionDispatchType) => void
}

export const DialogsContainer = (props: DialogsContainerProps) => {

    const sendMessageHandler = (message: string) => {
        props.dispatch(AddMessageActionCreator(message))
    }

    return (
        <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                 messagesData={props.state.dialogsPage.messagesData}
                 sendMessage={sendMessageHandler}/>
    )
}