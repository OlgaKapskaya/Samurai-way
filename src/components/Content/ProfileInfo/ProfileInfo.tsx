import React from "react";
import s from "./ProfileInfo.module.css";

type ProfileInfoProps = {
    id: string,
    name: string,
    dateOfBirth: string,
    city: string,
    education: string,
    site?: string,
    avatar: string
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.avatarContainer}>
                <img src={props.avatar} className={s.avatar}/>
            </div>
            <div className={s.infoContainer}>
                <div className={s.Name}>{props.name}</div>
                <div className={s.data}><span> Date of birth: </span> {props.dateOfBirth}</div>
                <div className={s.data}><span> City: </span> {props.city}</div>
                <div className={s.data}><span> Education: </span> {props.education}</div>
                <div className={s.data}><span> Web site: </span> {props.site}</div>
            </div>
        </div>
    )
}