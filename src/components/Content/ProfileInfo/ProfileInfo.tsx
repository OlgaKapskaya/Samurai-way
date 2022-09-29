import React from "react";
import content from "./ProfileInfo.module.css";

type ProfileInfoProps = {
    id: number,
    name: string,
    dateOfBirth: string,
    city: string,
    education: string,
    site?: string,
    avatar: string
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    return (
        <>
            <div>
                <img className={content.headerContent}
                     src='https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg'/>

            </div>
            <div>
                <table>
                    <tr>
                        <td className={content.avatarContainer}>
                            <img className={content.avatarImage}
                                 src={props.avatar}/>
                        </td>
                        <td className={content.dataContainer}>
                            <div className={content.Name}>{props.name}</div>
                            <div className={content.data}>Date of birth: {props.dateOfBirth}</div>
                            <div className={content.data}>City: {props.city}</div>
                            <div className={content.data}>Education: {props.education}</div>
                            <div className={content.data}>Web site: {props.site}</div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}