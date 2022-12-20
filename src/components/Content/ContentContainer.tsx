import React from "react";
import Content from "./Content";
import {PostDataType} from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../bll/store";
import {connect} from "react-redux";
import {
    AddLike,
    AddPostAC,
    getUserProfileTC,
    getUserStatusTC,
    SetUserProfile, updateUserStatusTC
} from "../../bll/profileReduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {stateType} from "../../bll/redux-store";
import {compose} from "redux";

type mapStateToPropsType = {
    postData: PostDataType[]
    profile: ProfileUserType
    status: string
    isAuth: boolean
    userID: number | null
}
type mapDispatchToPropsType = {
    AddPost: (newPostText: string) => void
    AddLike: (count: number, id: string) => void
    SetUserProfile: (profile: ProfileUserType) => void
    getUserProfileTC: (userID: string) => void
    getUserStatusTC: (userID: string) => void
    updateUserStatus: (status: string) => void
}
type PathParamsType = {
    userID: string,
}

type ContentPropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType
    & mapDispatchToPropsType

export class ContentContainer extends React.Component<ContentPropsType> {
    componentDidMount() {
        let userAuthorizedID = this.props.match.params.userID
        if (!userAuthorizedID) {
            userAuthorizedID = this.props.userID ? this.props.userID.toString() : ''
            if (userAuthorizedID === '') {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfileTC(userAuthorizedID)
        this.props.getUserStatusTC(userAuthorizedID)
    }

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        userID: state.auth.id
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        AddPost: AddPostAC, AddLike, SetUserProfile,
        getUserProfileTC, getUserStatusTC, updateUserStatus: updateUserStatusTC
    } as mapDispatchToPropsType),
    withRouter)(ContentContainer)

