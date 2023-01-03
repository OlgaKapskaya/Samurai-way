import React from "react";
import "./App.css";
import {Route, Switch, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/Users/FindUsersContainer";
import {Settings} from "./components/Settings/Settings";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./bll/reducers/appReducer";
import {stateType} from "./bll/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type AppType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Switch>
                    <Route path="/profile/:userID?" render={() => <ContentContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/users" render={() => <FindUsersContainer/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route exact path="/login" render={() => <Login/>}/>
                    <Route exact path="/" render={() => <ContentContainer/>}/>
                    <Route path='*' render={() => <div className="content" style={{display: "flex", alignItems: "flex-start", width: "100%", justifyContent: "center"}}><h1>404: PAGE NOT FOUND</h1></div>} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)