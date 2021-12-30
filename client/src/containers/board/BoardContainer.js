import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Boards from "../../components/board/BoardList";
import {addPost} from "../../modules/board/board";
import PageCount from "../../components/board/PageCount";

export default function BoardContainer() {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addPost(text));

    return (
        <>
            <Boards posts={posts} onCreate={onCreate}/>
            <PageCount />
        </>
         
)}
