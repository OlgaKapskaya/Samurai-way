import React, {FC} from "react";
import s from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../bll/store";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "../Status/ProfileStatusWithHooks";
import {UserAvatar} from "./Avatar/UserAvatar";

type ProfileInfoProps = {
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}
export const ProfileInfo: FC<ProfileInfoProps> = ({profile,savePhoto, status, updateUserStatus, isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.mainContainer}>
            <div className={s.avatarContainer}>
                <UserAvatar img={profile.photos.large}
                            savePhoto={savePhoto}
                            size={200}
                            isOwner={isOwner}/>
            </div>
            <div className={s.infoContainer}>
                <div className={s.Name}>{profile.fullName}</div>

                <ProfileStatusWithHooks status={status}
                                        updateUserStatus={updateUserStatus}/>


                <div className={s.data}><span> About me: </span> {profile.aboutMe}</div>
                <div className={s.data}><span> Looking for a job: <input type={'checkbox'}
                                                                         checked={profile.lookingForAJob}/></span></div>
                <div className={s.data}><span> Description: </span> {profile.lookingForAJobDescription}</div>
                <div className={s.data}><span> GitHub: </span> {profile.contacts.github}</div>
            </div>
        </div>
    )
}