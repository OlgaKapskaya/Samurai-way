import React from "react";
import {PostDataType} from "./MyPosts/MyPosts";
import s from './Content.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileUserType} from "../../BLL/store";


type ContentProps = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileUserType
}


function Content(props: ContentProps) {
    return (
        <div className={'content'}>
            <div >
                <img className={s.headerContent} alt={'big content'}
                     src='https://img5.goodfon.ru/wallpaper/nbig/5/2e/gory-skaly-vodoem-les-otrazhenie-bereg.jpg'/>
            </div>
            <div className={s.containerInfoAndPosts}>
                <div className={s.containerInfo}>
                    <ProfileInfo profile={props.profile}/>
                </div>
                <div className={s.containerPosts}>

                    <MyPostsContainer/>
                </div>

            </div>
        </div>
    )
}

export default Content;