import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {stateType} from "../../bll/redux-store";
import {logoutTC} from "../../bll/reducers/authReducer";
import {getIsAuth, getUserLogin} from "../../bll/selectors/authSelectors";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}
type mapDispatchToPropsType = {
    logoutTC: () => void
}
const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        isAuth: getIsAuth(state),
        login: getUserLogin(state)
    }
}

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType
class HeaderContainer extends React.Component<HeaderContainerType>{
    render() {
        return <Header {...this.props}/>
    }
}


export default connect(mapStateToProps, {logoutTC})(HeaderContainer)