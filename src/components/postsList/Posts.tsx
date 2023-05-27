import React, {useEffect} from 'react';
import {useAppDispatch} from "../../store/config/hook";
import {PostsItem} from "./postItem/PostsItem";
import {getPostsAC} from "../../store/slices/postSlice";
import {SearchPost} from "./searchPost/SearchPost";
import {usePostsForRender} from "../../utils/customHook/HookForPosts";

export const Posts = () => {

    const {
        filteredPostsByTitle, postsPage,
        searchValue, handleSearch, handleClear,
        nextPageHandler, prevPageHandler, minPage, maxPage
    } = usePostsForRender()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPostsAC(postsPage))
    }, [dispatch, postsPage])

    return (
        <div>
            <div>
                POST MAIN
            </div>
            <SearchPost searchValue={searchValue} handleSearch={handleSearch} handleClear={handleClear}/>
            {filteredPostsByTitle.map((post, index) =>
                <PostsItem post={post} key={index}/>
            )}
            <div>
                <button onClick={prevPageHandler} disabled={postsPage === minPage}>prev</button>
                <button onClick={nextPageHandler} disabled={postsPage === maxPage}>next</button>
            </div>
        </div>
    );
};

