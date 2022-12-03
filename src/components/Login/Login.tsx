import {Field, InjectedFormProps, reduxForm} from "redux-form";
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
        <div>
            <h1 style={{padding: '100px'}}> LOGIN </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props ) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder='Login'
                       type='text'
                       name='login'
                       component='input'/>
            </div>
            <div>
                <Field placeholder='Password'
                       type='password'
                       name='password'
                       component='input'/>
            </div>
            <div>
                <Field type='checkbox'
                       component='input'
                       name='rememberMe'/>
                remember me
            </div>
            <button> Login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)