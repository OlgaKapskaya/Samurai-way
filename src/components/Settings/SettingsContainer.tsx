import React from 'react';
import {UserType} from "../Content/Content";
import {Settings} from "./Settings";
import {ChangePersonalDataActionCreator} from "../../redux/userReducer";
import {StateType} from "../../redux/store";
import {dispatchType} from "../../redux/redux-store";
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