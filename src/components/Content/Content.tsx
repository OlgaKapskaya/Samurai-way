import React from "react";
import content from "./Content.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts, PostDataType} from "./MyPosts/MyPosts";


type ContentProps = {
    user: UserType
    postData: PostDataType[]
    addPost: (post: string) => void
    addLike: (id: string, count: number) => void
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
                     addPost={props.addPost}
                     addLike={props.addLike}
            />
        </div>
    )
}

export default Content;