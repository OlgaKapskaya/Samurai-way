import {AddMessageActionCreator} from "../../BLL/dialogsReducer";
import {Dialogs, DialogsDataType, MessagesDataType} from "./Dialogs";
import {dispatchType, stateType} from "../../BLL/redux-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type MapStateToPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
type MapDispatchToPropsType  = {
    sendMessage: (message: string) => void
}

let mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}
let mapDispatchToProps = (dispatch: dispatchType): MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => dispatch(AddMessageActionCreator(message))
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))