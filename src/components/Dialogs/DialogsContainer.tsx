import {AddMessageActionCreator} from "../../BLL/dialogsReducer";
import {Dialogs, DialogsDataType, MessagesDataType} from "./Dialogs";
import {StateType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
import {connect} from "react-redux";
import {PostDataType} from "../Content/MyPosts/MyPosts";

type mapStateToPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
type mapDispatchToPropsType  = {
    sendMessage: (message: string) => void
}

let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}
let mapDispatchToProps = (dispatch: dispatchType): mapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => dispatch(AddMessageActionCreator(message))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)