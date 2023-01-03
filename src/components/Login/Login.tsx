import s from './Login.module.css'
import React, {FC} from "react";
import {connect} from "react-redux";
import {loginTC} from "../../bll/reducers/authReducer";
import {stateType} from "../../bll/redux-store";
import {Redirect} from "react-router-dom";
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";


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
const Login:FC<LoginType> = ({loginTC, isAuth}) => {
    const onSubmit = (data: FormDataType) => {
        loginTC(data.login, data.password, data.rememberMe)
    }
    if (isAuth) {
        return <Redirect to='/profile'/>
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


