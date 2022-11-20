import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {stateType} from "../../BLL/redux-store";
import {setAuthUserData} from "../../BLL/authReducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}
type mapDispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}
const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then( response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)