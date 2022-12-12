import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './Login.module.css'
import React, {FC} from "react";
import {ButtonSubmit} from "../common/FormsControls/ButtonSubmit/ButtonSubmit";
import {TextareaFC} from "../common/FormsControls/TextareaTC/TextareaFC";
import {CheckboxTC} from "../common/FormsControls/CheckboxTC/CheckboxTC";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../bll/authReducer";
import {stateType} from "../../bll/redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type LoginType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
const Login = (props: LoginType) => {
    const onSubmit = (data: FormDataType) => {
        props.loginTC(data.login, data.password, data.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
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
export default connect(mapStateToProps, {loginTC})(Login)


const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit, error} = props
    console.log(error)
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
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)