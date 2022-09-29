import React from "react";
import content from "./Content.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPosts} from "./MyPosts/MyPosts";

let user = {
    id: 1,
    name: 'Olga Kapskaya',
    dateOfBirth: '14.06.1991',
    city: 'Minsk',
    education: 'BSU',
    site: '-',
    avatar: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg'

}
let postData = [
    {id: 1, message: 'Hi, how are you?', likes: 3},
    {id: 2, message: 'It\'s my first post', likes: 5},
    {id: 3, message: 'Hi, how are you?', likes: 67},
    {id: 4, message: 'Hi, how are you?', likes: 33},
    {id: 5, message: 'Smile today', likes: 9},
]

function Content() {
    return (
        <div className={'content'}>
            <ProfileInfo
                id={user.id}
                name={user.name}
                dateOfBirth={user.dateOfBirth}
                city={user.city}
                education={user.education}
                site={user.site}
                avatar={user.avatar}/>
            <MyPosts postData={postData}/>
        </div>
    )
}

export default Content;