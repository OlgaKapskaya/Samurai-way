import React from "react";
import nav from "../CSS-modules/Navigation.module.css"
import messages from "./icons/messages.png"
import news from "./icons/news.png"
import profile from "./icons/profile.png"
import music from "./icons/music.png"
import settings from "./icons/settings.png"


function Navigation(){
    return (
        <nav className={nav.nav}>
            <div className={nav.item}><img className={nav.icons} src={profile}/><a className={nav.link} href={"#"}> Profile</a></div>
            <div className={nav.item}><img className={nav.icons} src={messages}/><a className={nav.link} href={"#"}> Messages</a></div>
            <div className={nav.item}><img className={nav.icons} src={news}/><a className={nav.link} href={"#"}> News</a></div>
            <div className={nav.item}><img className={nav.icons} src={music}/><a className={nav.link} href={"#"}> Music</a></div>
            <div className={nav.item}><img className={nav.icons} src={settings}/><a className={nav.link} href={"#"}> Settings</a></div>
        </nav>
    )
}
export default Navigation;