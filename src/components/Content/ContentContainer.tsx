import React from "react";
import Content from "./Content";
import {PostDataType} from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../BLL/store";
import {connect} from "react-redux";
import {AddLike, AddPostAC, ChangePostText, getUserProfileTC, SetUserProfile} from "../../BLL/profileReduser";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {stateType} from "../../BLL/redux-store";

type mapStateToPropsType = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileUserType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    AddPost: () => void
    ChangePostText: (message: string) => void
    AddLike: (count: number, id: string) => void
    SetUserProfile: (profile: ProfileUserType) => void
    getUserProfileTC: (userID: string) => void
}
type PathParamsType = {
    userID: string,
}

type ContentPropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType
    & mapDispatchToPropsType

export class ContentContainer extends React.Component<ContentPropsType> {
    componentDidMount() {
        this.props.getUserProfileTC(this.props.match.params.userID)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
export const ContentC = withRouter(connect(mapStateToProps, {
    AddPost: AddPostAC, ChangePostText, AddLike, SetUserProfile, getUserProfileTC
} as mapDispatchToPropsType)(ContentContainer))



//refactor this code

// const WithURLDataContainerComponent = withRouter(ContentContainer)
// export const ContentC = connect(mapStateToProps, {
//     AddPost: AddPostAC, ChangePostText, AddLike, SetUserProfile
// } as mapDispatchToPropsType)(ContentContainer)
