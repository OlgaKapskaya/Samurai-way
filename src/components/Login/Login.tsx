import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './Login.module.css'
import React, {FC} from "react";
import {ButtonSubmit} from "../common/FormsControls/ButtonSubmit/ButtonSubmit";
import {TextareaFC} from "../common/FormsControls/TextareaTC/TextareaFC";
import {CheckboxTC} from "../common/FormsControls/CheckboxTC/CheckboxTC";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (data: FormDataType) => {
        console.log(data)
    }
    return (
        <div className='content'>
            <div className={s.container}>
                <h2 className={s.title}> LOGIN </h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}


const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.data}>
                <Field placeholder='Login'
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
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)