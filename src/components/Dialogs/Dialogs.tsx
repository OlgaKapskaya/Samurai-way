import React from 'react';
import s from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={"content"}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    Names
                </div>
                <div className={s.dialogsMessages}>
                    <div className={s.message}>Message 1</div>
                    <div className={s.message}>Message 2</div>
                    <div className={s.message}>Message 3</div>
                    <div className={s.message}>Message 4</div>
                </div>
            </div>
        </div>
    )
}