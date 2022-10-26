import React from "react";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../../redux/profileReduser";
import {AddPost} from "./AddPost";
import {StoreContext} from "../../../../StoreContext";

// type AddPostProps = {
//     dispatch: (action: ActionDispatchType) => void
//     newPostText: string
// }


export const AddPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                //functions
                const addPost = () => {
                    store.dispatch(AddPostActionCreator())
                }
                const changePostText = (text: string) => {
                    store.dispatch(ChangePostTextActionCreator(text))
                }

                return (<AddPost addPost={addPost}
                                 changePostText={changePostText}
                                 newPostText={store.getState().profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
