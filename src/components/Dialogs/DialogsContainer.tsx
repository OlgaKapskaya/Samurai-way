import {AddMessageActionCreator} from "../../BLL/dialogsReducer";
import {Dialogs, DialogsDataType, MessagesDataType} from "./Dialogs";
import {dispatchType, stateType} from "../../BLL/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    isAuth: boolean
}
type mapDispatchToPropsType  = {
    sendMessage: (message: string) => void
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: dispatchType): mapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => dispatch(AddMessageActionCreator(message))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)