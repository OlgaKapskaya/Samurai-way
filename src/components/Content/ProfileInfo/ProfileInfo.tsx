import React from "react";
import content from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
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
                                 src={'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg'}/>
                        </td>
                        <td className={content.dataContainer}>
                            <div className={content.Name}>Name</div>
                            <div className={content.data}>Date of birth:</div>
                            <div className={content.data}>City:</div>
                            <div className={content.data}>Education:</div>
                            <div className={content.data}>Web site:</div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}