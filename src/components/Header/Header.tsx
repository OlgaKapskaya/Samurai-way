import React from "react";
import header from "./Header.module.css"
import Navigation from "./Navigation/Navigation";

function Header() {
    return (
        <header className={header.headerContainer}>
            <div className={header.header}>
                <div className={header.logoAndTitle}>
                    {/*<img className={header.logo}*/}
                    {/*     src='https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png'/>*/}
                    <span className={header.name}>SOCIAL NETWORK</span>
                </div>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header;