import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {stateType} from "../../bll/redux-store";
import {setAuthUserTC} from "../../bll/authReducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}
type mapDispatchToPropsType = {
    setAuthUserTC: () => void
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
        this.props.setAuthUserTC()
    }

    render() {
        return <Header {...this.props}/>
    }
}


export default connect(mapStateToProps, {setAuthUserTC})(HeaderContainer)