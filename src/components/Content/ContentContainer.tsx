import React from "react";
import Content from "./Content";
import {PostDataType} from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../bll/store";
import {connect} from "react-redux";
import {
    AddLike,
    AddPostAC,
    getUserProfileTC,
    getUserStatusTC, savePhotoTC,
    SetUserProfile, updateUserStatusTC
} from "../../bll/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {stateType} from "../../bll/redux-store";
import {compose} from "redux";
import {getIsAuth, getUserID} from "../../bll/selectors/authSelectors";
import {getPostsData, getProfileData, getProfileStatus} from "../../bll/selectors/profileSelectors";

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
    savePhotoTC: (photo: File) => void

}
type PathParamsType = {
    userID: string,
}



type ContentPropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType
    & mapDispatchToPropsType

export class ContentContainer extends React.Component<ContentPropsType> {
    refreshProfile = () => {
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
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ContentPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userID !== prevProps.match.params.userID)
        this.refreshProfile()
    }

    render() {
        return <Content isOwner={!this.props.match.params.userID}
                        savePhoto={this.props.savePhotoTC}
                        {...this.props}/>
    }
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        postData: getPostsData(state),
        profile: getProfileData(state),
        status: getProfileStatus(state),
        isAuth: getIsAuth(state),
        userID: getUserID(state),
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        AddPost: AddPostAC, AddLike, SetUserProfile,
        getUserProfileTC, getUserStatusTC,
        updateUserStatus: updateUserStatusTC, savePhotoTC
    } as mapDispatchToPropsType),
    withRouter)(ContentContainer)

