import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts, PostDataType} from "./MyPosts/MyPosts";
import s from './Content.module.css'


type ContentProps = {
    user: UserType
    postData: PostDataType[]
    newPostText: string

}
export type UserType = {
    id: string
    name: string
    dateOfBirth: string
    city: string
    education: string
    site?: string
    avatar: string

}


function Content(props: ContentProps) {
    return (
        <div className={'content'}>
            <div >
                <img className={s.headerContent}
                     src='https://img5.goodfon.ru/wallpaper/nbig/5/2e/gory-skaly-vodoem-les-otrazhenie-bereg.jpg'/>
            </div>
            <div className={s.containerInfoAndPosts}>
                <div className={s.containerInfo}>

                    <ProfileInfo
                        id={props.user.id}
                        name={props.user.name}
                        dateOfBirth={props.user.dateOfBirth}
                        city={props.user.city}
                        education={props.user.education}
                        site={props.user.site}
                        avatar={props.user.avatar}
                    />
                </div>
                <div className={s.containerPosts}>
                    <MyPosts postData={props.postData}
                             newPostText={props.newPostText}
                    />
                </div>

            </div>
        </div>
    )
}

export default Content;