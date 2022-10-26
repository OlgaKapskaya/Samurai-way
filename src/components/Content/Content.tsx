import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts, PostDataType} from "./MyPosts/MyPosts";


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
            <ProfileInfo
                id={props.user.id}
                name={props.user.name}
                dateOfBirth={props.user.dateOfBirth}
                city={props.user.city}
                education={props.user.education}
                site={props.user.site}
                avatar={props.user.avatar}
            />
            <MyPosts postData={props.postData}
                     newPostText={props.newPostText}
            />
        </div>
    )
}

export default Content;