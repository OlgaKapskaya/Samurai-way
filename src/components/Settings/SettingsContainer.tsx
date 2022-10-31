import React from 'react';
import s from "./Settings.module.css"
import {Button, TextField} from "@material-ui/core";
import {UserType} from "../Content/Content";
import { StoreContext } from '../../StoreContext';
import {AddMessageActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "../Dialogs/Dialogs";
import {Settings} from "./Settings";
import {ChangePersonalDataActionCreator} from "../../redux/userReducer";

type SettingsProps = {
    userData: UserType
    onChangePersonalData: (userID: string,
                           userName: string,
                           dateOfBirth: string,
                           city: string,
                           education: string,
                           site: string,
                           avatar: string) => void
}

export const SettingsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const changePersonalDataHandler = (user: UserType) => {
                    store.dispatch(ChangePersonalDataActionCreator(user))
                }

                return (
                    <Settings userData={store.getState().user}
                              onChangePersonalData={changePersonalDataHandler}/>
                )
            }}
        </StoreContext.Consumer>
    )
}