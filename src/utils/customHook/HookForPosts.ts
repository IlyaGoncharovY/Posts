import {useAppDispatch, useAppSelector} from "../../store/config/hook";
import React, {useState} from "react";
import {getPostsAC, nextPage, prevPage} from "../../store/slices/postSlice";

export const usePostsForRender = () => {

    // const posts = useAppSelector(state => state.posts.posts)
    const filteredPosts = useAppSelector(state => state.posts.posts)
    const postsPage = useAppSelector(state => state.posts.postsPage)

    //limit page number
    const maxPage = 10
    const minPage = 1

    const [searchValue, setSearchValue] = useState<string>("");

    const filteredPostsByTitle = searchValue
        ? filteredPosts.filter(post => post.title.includes(searchValue))
        : filteredPosts;

    const dispatch = useAppDispatch()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        dispatch(getPostsAC(postsPage));
    };

    const nextPageHandler = () => dispatch(nextPage(postsPage));
    const prevPageHandler = () => dispatch(prevPage(postsPage));

    return {
        filteredPostsByTitle,
        postsPage,
        searchValue,
        handleSearch,
        handleClear,
        nextPageHandler,
        prevPageHandler,
        minPage, maxPage
    }
}