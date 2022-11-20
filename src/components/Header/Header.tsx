import React from "react";
import header from "./Header.module.css"
import {Navigation} from "./Navigation/Navigation";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

function Header(props: HeaderPropsType) {
    return (
        <header className={header.headerContainer}>
            <div className={header.header}>
                <div className={header.logoAndTitle}>
                   <span className={header.name}>SOCIAL NETWORK</span>
                </div>

                <Navigation/>

                <div className={header.loginBlock}>
                    {props.isAuth ? props.login :<NavLink to={'/login'} className={(isActive) => isActive ? header.active : header.link}>Login</NavLink>}

                </div>
            </div>
        </header>
    )
}

export default Header;