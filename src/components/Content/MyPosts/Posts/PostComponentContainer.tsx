import React from "react";
import {AddLikeActionCreator} from "../../../../redux/profileReduser";
import {ActionDispatchType} from "../../../../redux/store";
import {PostComponent} from "./PostComponent";
import {PostDataType} from "../MyPosts";
import { StoreContext } from "../../../../StoreContext";

type PostComponentProps = {
    postData: PostDataType
    key: string
}

export const PostComponentContainer = (props: PostComponentProps) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addLike = (count: number, id: string) => {
                    store.dispatch(AddLikeActionCreator(count, id))
                }
                return (
                    <PostComponent id={props.postData.id}
                                   message={props.postData.message}
                                   likes={props.postData.likes}
                                   userName={store.getState().user.name}
                                   addLike={ addLike }/>
                )
            }}

        </StoreContext.Consumer>
        )

}
