import {UserType} from "../Content/Content";
import {Settings} from "./Settings";
import {ChangePersonalDataActionCreator} from "../../BLL/userReducer";
import {StateType} from "../../BLL/store";
import {dispatchType} from "../../BLL/redux-store";
import {connect} from "react-redux";

let mapStateToProps = (state: StateType) => {
    return {
        userData: state.user
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        onChangePersonalData: (user: UserType) => dispatch(ChangePersonalDataActionCreator(user))
    }
}

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)