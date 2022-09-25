import React from "react";
import nav from "./Navigation.module.css"
import messages from "./icons/messages.png"
import news from "./icons/news.png"
import profile from "./icons/profile.png"
import music from "./icons/music.png"
import settings from "./icons/settings.png"
import {NavLink} from "react-router-dom";


function Navigation(){
    return (
        <nav className={nav.nav}>
            <div className={nav.item}>
                <img className={nav.icons} src={profile}/>
                <NavLink className={nav.link} to={"/profile"}> Profile</NavLink>
            </div>
            <div className={nav.item}>
                <img className={nav.icons} src={messages}/>
                <NavLink className={nav.link} to={"/dialogs"}> Messages</NavLink>
            </div>
            <div className={nav.item}>
                <img className={nav.icons} src={news}/>
                <NavLink className={nav.link} to={"/news"}> News</NavLink>
            </div>
            <div className={nav.item}>
                <img className={nav.icons} src={music}/>
                <NavLink className={nav.link} to={"/music"}> Music</NavLink>
            </div>
            <div className={nav.item}>
                <img className={nav.icons} src={settings}/>
                <NavLink className={nav.link} to={"/settings"}> Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navigation;