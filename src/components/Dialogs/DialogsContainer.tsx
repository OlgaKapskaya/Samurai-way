import {AddMessageActionCreator} from "../../bll/dialogsReducer";
import {Dialogs, DialogsDataType, MessagesDataType} from "./Dialogs";
import {AppDispatchType, stateType} from "../../bll/redux-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

type MapStateToPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

let mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}
let mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => dispatch(AddMessageActionCreator(message))
    }
}
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)