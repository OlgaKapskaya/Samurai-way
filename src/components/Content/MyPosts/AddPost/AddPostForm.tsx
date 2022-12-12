import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../../../Dialogs/Dialogs.module.css";

export type AddPostFormDataType = {
    post: string
}
const AddPostForm: FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.data}>
                <Field placeholder='Enter you post'
                       type='text'
                       name='post'
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
export const AddPostReduxForm = reduxForm<AddPostFormDataType>({
    // a unique name for the form
    form: 'profileAddPostForm'
})(AddPostForm)