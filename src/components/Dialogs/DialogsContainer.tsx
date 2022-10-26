import React from 'react';
import {AddMessageActionCreator} from "../../redux/dialogsReducer";
import { StoreContext } from '../../StoreContext';
import {Dialogs} from "./Dialogs";

// export type DialogsContainerProps = {
//     state: StateType
//     dispatch: (action: ActionDispatchType) => void
// }

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const sendMessageHandler = (message: string) => {
                    store.dispatch(AddMessageActionCreator(message))
                }

                return (
                    <Dialogs dialogsData={store.getState().dialogsPage.dialogsData}
                             messagesData={store.getState().dialogsPage.messagesData}
                             sendMessage={sendMessageHandler}/>
                )
            }}

        </StoreContext.Consumer>
    )
}