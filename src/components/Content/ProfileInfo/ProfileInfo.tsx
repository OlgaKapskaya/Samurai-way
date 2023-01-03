import React, {FC} from "react";
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../bll/store";
import noAvatarImg from "../../../IMG/no_avatar_img.webp";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../Status/ProfileStatusWithHooks";

type ProfileInfoProps = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileInfo: FC<ProfileInfoProps> = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.mainContainer}>
            <div className={s.avatarContainer}>
                <img src={profile.photos.large !== null ? profile.photos.large : noAvatarImg} className={s.avatar} alt='avatar'/>
            </div>
            <div className={s.infoContainer}>
                <div className={s.Name}>{profile.fullName}</div>

                <ProfileStatusWithHooks status={status}
                                        updateUserStatus={updateUserStatus}/>
                {/*<ProfileStatus status={props.status}*/}
                {/*               updateUserStatus={props.updateUserStatus}/>*/}

                <div className={s.data}><span> About me: </span> {profile.aboutMe}</div>
                <div className={s.data}><span> Looking for a job: <input type={'checkbox'} checked={profile.lookingForAJob}/></span></div>
                <div className={s.data}><span> Description: </span> {profile.lookingForAJobDescription}</div>
                <div className={s.data}><span> GitHub: </span> {profile.contacts.github}</div>
            </div>
        </div>
    )
}