import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './Login.module.css'
import {FC} from "react";

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
                       component='input'
                />
            </div>
            <div className={s.data}>
                <Field placeholder='Password'
                       type='password'
                       name='password'
                       component='input'
                />
            </div>
            <div className={s.data}>
                <Field type='checkbox'
                       component='input'
                       name='rememberMe'/>
                remember me
            </div>
            <div className={s.button}>
            <button>
                Login
            </button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)