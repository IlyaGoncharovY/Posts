import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/config/hook";
import {PostsItem} from "./PostsItem";
import {getPosts} from "../../store/slices/postSlice";

export const Posts = () => {

    const posts = useAppSelector(state => state.posts.posts)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div>
            {posts.map((post, index) =>
                <PostsItem post={post} key={index}/>
            )}
        </div>
    );
};

