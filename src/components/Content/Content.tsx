import React from "react";
import content from "../CSS-modules/Content.module.css"
import {PostComponent} from "./PostComponent";


function Content() {
    return (
        <div className={content.content}>
            <div>
                <img className={content.headerContent}
                     src='https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg'/>
            </div>
            <div>
                <table>
                    <tr>
                        <td className={content.avatarContainer}>
                            <img className={content.avatarImage}
                                 src={'https://img.freepik.com/free-icon/jpg-extension_318-1831.jpg?w=360'}/>
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

            <div className={content.postContainer}>
                <h3>My posts</h3>
                <div>New post</div>
                <div><input className={"input"}/></div>
                <div><button className={"button"}>Send</button></div>
            </div>
            <PostComponent text={"Post1"}/>
            <PostComponent text={"Post2"}/>
            <PostComponent text={"Post3"}/>

        </div>
    )
}

export default Content;