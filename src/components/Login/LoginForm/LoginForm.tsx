import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Login.module.css";
import {TextareaFC} from "../../common/FormsControls/TextareaTC/TextareaFC";
import {required} from "../../../utils/validators/validators";
import {CheckboxTC} from "../../common/FormsControls/CheckboxTC/CheckboxTC";
import {ButtonSubmit} from "../../common/FormsControls/ButtonSubmit/ButtonSubmit";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit, error} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            {error && <div className={s.error}> { error } </div>}
            <div className={s.data}>
                <Field placeholder='Email'
                       type='text'
                       name='login'
                       variant='standard'
                       component={TextareaFC}
                       validate={[required]}
                />
            </div>
            <div className={s.data}>
                <Field placeholder='Password'
                       type='password'
                       name='password'
                       variant='standard'
                       component={TextareaFC}
                       validate={[required]}
                />
            </div>
            <div className={s.data}>
                <Field type='checkbox'
                       component={CheckboxTC}
                       label='remember me'/>
            </div>

            <div className={s.button}>
                <ButtonSubmit form={LoginForm}/>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)