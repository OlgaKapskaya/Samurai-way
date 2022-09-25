import React from "react";
import content from "./Content.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPosts} from "./MyPosts/MyPosts";


function Content() {
    return (
        <div className={'content'}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Content;