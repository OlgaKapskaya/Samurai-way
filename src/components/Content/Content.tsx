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

function Content() {
    return (
        <div className={'content'}>
            <ProfileInfo id={user.id} name={user.name} dateOfBirth={user.dateOfBirth} city={user.city} education={user.education} site={user.site} avatar={user.avatar}/>
            <MyPosts/>
        </div>
    )
}

export default Content;