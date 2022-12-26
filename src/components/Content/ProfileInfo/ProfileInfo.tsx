import React from "react";
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../bll/store";
import noAvatarImg from "../../../IMG/no_avatar_img.webp";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "../Status/ProfileStatus";
import {ProfileStatusWithHooks} from "../Status/ProfileStatusWithHooks";

type ProfileInfoProps = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.mainContainer}>
            <div className={s.avatarContainer}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : noAvatarImg} className={s.avatar} alt='avatar'/>
            </div>
            <div className={s.infoContainer}>
                <div className={s.Name}>{props.profile.fullName}</div>

                <ProfileStatusWithHooks status={props.status}
                                        updateUserStatus={props.updateUserStatus}/>
                {/*<ProfileStatus status={props.status}*/}
                {/*               updateUserStatus={props.updateUserStatus}/>*/}

                <div className={s.data}><span> About me: </span> {props.profile.aboutMe}</div>
                <div className={s.data}><span> Looking for a job: <input type={'checkbox'} checked={props.profile.lookingForAJob}/></span></div>
                <div className={s.data}><span> Description: </span> {props.profile.lookingForAJobDescription}</div>
                <div className={s.data}><span> GitHub: </span> {props.profile.contacts.github}</div>
            </div>
        </div>
    )
}