import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";

export type MessageFormDataType = {
    message: string
}

const MessageForm: FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.data}>
                <Field placeholder='Enter you message'
                       type='text'
                       name='message'
                       component='textarea'
                />
            </div>
            <div className={s.button}>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}
export const MessageReduxForm = reduxForm<MessageFormDataType>({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(MessageForm)