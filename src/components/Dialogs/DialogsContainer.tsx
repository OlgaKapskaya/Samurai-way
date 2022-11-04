import React from 'react';
import {AddMessageActionCreator} from "../../BLL/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
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