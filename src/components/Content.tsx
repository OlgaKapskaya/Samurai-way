import React from "react";
import "../CSS-modules/Content.css"
import {PostComponent} from "./PostComponent";


function Content() {
    return (
        <div className='content'>
            <div>
                <img className={"headerContent"}
                     src='https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android.jpg'/>
            </div>
            <div>
                <table>
                    <tr>
                        <td className={"avatarContainer"}>
                            <img className={"avatarImage"}
                                 src={'https://img.freepik.com/free-icon/jpg-extension_318-1831.jpg?w=360'}/>
                        </td>
                        <td className={"dataContainer"}>
                            <div className={"Name"}>Name</div>
                            <div className={"DateOfBirth"}>Date of birth:</div>
                            <div className={"City"}>City:</div>
                            <div className={"Education"}>Education:</div>
                            <div className={"WebSite"}>Web site:</div>
                        </td>
                    </tr>
                </table>
            </div>

            <div className={"postContainer"}>
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