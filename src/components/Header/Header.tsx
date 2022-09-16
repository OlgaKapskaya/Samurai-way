import React from "react";
import header from "../CSS-modules/Header.module.css"

function Header(){
    return (
        <header className={header.header}>
            <img className={header.logo} src='https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png' />
        </header>
    )
}
export default Header;