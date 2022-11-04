import React from "react";
import header from "./Header.module.css"
import {Navigation} from "./Navigation/Navigation";

function Header() {
    return (
        <header className={header.headerContainer}>
            <div className={header.header}>
                <div className={header.logoAndTitle}>
                   <span className={header.name}>SOCIAL NETWORK</span>
                </div>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header;