import React from 'react';
import {AddMessageActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../redux/store";
import {dispatchType} from "../../redux/redux-store";
import {connect} from "react-redux";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        sendMessage: (message: string) => dispatch(AddMessageActionCreator(message))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)