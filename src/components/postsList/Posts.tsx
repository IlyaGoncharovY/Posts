import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/config/hook";
import {PostsItem} from "./PostsItem";
import {getPosts, nextPage, prevPage} from "../../store/slices/postSlice";

export const Posts = () => {

    const posts = useAppSelector(state => state.posts.posts)
    const postsPage = useAppSelector(state => state.posts.postsPage)
    //limit page number
    const maxPage = 10
    const minPage = 1

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPosts(postsPage))
    }, [dispatch, postsPage])

    const nextPageHandler = () => dispatch(nextPage(postsPage));
    const prevPageHandler = () => dispatch(prevPage(postsPage));

    return (
        <div>
            <div>
                POST MAIN
            </div>
            {posts.map((post, index) =>
                <PostsItem post={post} key={index}/>
            )}
            <div>
                <button onClick={prevPageHandler} disabled={postsPage === minPage}>prev</button>
                <button onClick={nextPageHandler} disabled={postsPage === maxPage}>next</button>
            </div>
        </div>
    );
};

