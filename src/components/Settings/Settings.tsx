import React, {ChangeEvent, useState} from 'react';
import s from "./Settings.module.css"
import {Button, TextField} from "@material-ui/core";
import {UserType} from "../Content/Content";

type SettingsProps = {
    userData: UserType
    onChangePersonalData: (user: UserType) => void
}

export const Settings = (props: SettingsProps) => {
    const [changeUserData, setChangeUserData] = useState<UserType>(props.userData)
    const onChangeUserNameHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setChangeUserData({...changeUserData, name: event.currentTarget.value})
    }
    const onChangeUserDateOfBirthHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setChangeUserData({...changeUserData, dateOfBirth: event.currentTarget.value})
    }
    const onChangeUserCityHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setChangeUserData({...changeUserData, city: event.currentTarget.value})
    }
    const onChangeUserEducationHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setChangeUserData({...changeUserData, education: event.currentTarget.value})
    }
    const onChangeUserSiteHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setChangeUserData({...changeUserData, site: event.currentTarget.value})
    }
    const onClickSavePersonalDataHandler = () => {
        if (changeUserData.name.trim() !== "") {
            props.onChangePersonalData(changeUserData)
        }
    }
    return (
        <div className={"content"}>
            <div className={s.settingsContainer}>
                <div className={s.sidebar}>

                </div>
                <div className={s.settings}>

                    <div className={s.inputPersonalDataContainer}>
                        Personal data
                        <hr/>
                        <label className={s.labelItem}> Name: </label>
                        <TextField type={'text'}
                                   value={changeUserData.name}
                                   onChange={onChangeUserNameHandler}/>

                        <label className={s.labelItem}> Date of birth: </label>
                        <TextField type={'date'}
                                   value={changeUserData.dateOfBirth}
                                   onChange={onChangeUserDateOfBirthHandler}/>

                        <label className={s.labelItem}> City: </label>
                        <TextField type={'text'}
                                   value={changeUserData.city}
                                   onChange={onChangeUserCityHandler}/>

                        <label className={s.labelItem}> Education: </label>
                        <TextField type={'text'}
                                   value={changeUserData.education}
                                   onChange={onChangeUserEducationHandler}/>

                        <label className={s.labelItem}> Web site: </label>
                        <TextField type={'text'}
                                   value={changeUserData.site}
                        onChange={onChangeUserSiteHandler}/>

                        <label className={s.labelItem}> Avatar: </label>
                        <TextField type={'file'}/>
                        <div className={s.saveButtonContainer}>
                            <Button onClick={onClickSavePersonalDataHandler}
                                    size={'small'}
                                    variant={'outlined'}
                                    color={'primary'}>
                                SAVE</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}