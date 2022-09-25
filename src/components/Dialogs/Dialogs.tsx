import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";

export const Dialogs = () => {
    return (
        <div className={"content"}>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    <DialogsItems id={1} name={'Viktor'} avatar={'https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg'}/>
                    <DialogsItems id={2} name={'Boris'} avatar={'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'}/>
                </div>
                <div className={s.dialogsMessages}>
                    <DialogsMessages message={"Hello!"}/>
                    <DialogsMessages message={"How are you?"}/>
                    <DialogsMessages message={"Ayyyyyyyyy!!!!!"}/>
                    <DialogsMessages message={"..."}/>
                </div>

            </div>
        </div>
    )
}