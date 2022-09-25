import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";

export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Viktor", avatar:"https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"},
        {id: 2, name: 'Boris', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id: 3, name: 'Veronika', avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},
    ]

    let messagesData = [
        {id: 1, message: "Hello!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id: 2, message: 'How are you?', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id: 3, message: 'Ayyyyyyyyy!!!!!', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id: 4, message: 'a part that combines with other parts to form something bigger:' +
                '                        "television/aircraft/computer components' +
                '                        "The factory supplies electrical components for cars.' +
                '                        "The course has four main components: business law, finance, computing and management skills.' +
                '                        "Fresh fruit and vegetables are an essential component of a healthy diet.' +
                '                        "The control of inflation is a key component of the governments economic policy.', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
        {id:5, message: "Hey!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'}
    ]

    return (
        <div className={"content"}>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogsData.map(elem => {
                        return (
                            <DialogsItems id={elem.id} name={elem.name} avatar={elem.avatar}/>
                        )
                    })}

                </div>
                <div className={s.dialogsMessages}>
                    {messagesData.map(elem => {
                        return (
                            <DialogsMessages message={elem.message} avatar={elem.avatar}/>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}