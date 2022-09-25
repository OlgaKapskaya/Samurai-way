import React from "react";
import {PostComponent} from "./Posts/PostComponent";
import content from "../MyPosts.module.css"
import {AddPost} from "./AddPost/AddPost";

export const MyPosts = () => {
let postData = [
    {id: 1, message: 'Hi, how are you?', likes: 3},
    {id: 2, message: 'It\'s my first post', likes: 5},
    {id: 3, message: 'Hi, how are you?', likes: 67},
    {id: 4, message: 'Hi, how are you?', likes: 33},
    {id: 5, message: 'Hi, how are you?', likes: 9},
]
    return (
        <>
            <AddPost/>
            {postData.map(elem => {
                return (
                    <PostComponent message={elem.message} likes={elem.likes}/>
                )
            })}

        </>
    )
}