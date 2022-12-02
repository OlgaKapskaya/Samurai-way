import React from "react";
import Content from "./Content";
import {PostDataType} from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../BLL/store";
import {connect} from "react-redux";
import {
    AddLike,
    AddPostAC,
    ChangePostText,
    getUserProfileTC,
    getUserStatusTC,
    SetUserProfile, updateUserStatusTC
} from "../../BLL/profileReduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {stateType} from "../../BLL/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileUserType
    status: string
}
type mapDispatchToPropsType = {
    AddPost: () => void
    ChangePostText: (message: string) => void
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
        this.props.getUserProfileTC(this.props.match.params.userID)
        this.props.getUserStatusTC(this.props.match.params.userID)
    }

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(withAuthRedirect,
    connect(mapStateToProps, {
        AddPost: AddPostAC, ChangePostText,
        AddLike, SetUserProfile, getUserProfileTC, getUserStatusTC, updateUserStatus: updateUserStatusTC
    } as mapDispatchToPropsType),
    withRouter)(ContentContainer)

