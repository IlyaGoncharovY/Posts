import React, {useEffect} from 'react';
import {useAppDispatch} from "../../store/config/hook";
import {PostsItem} from "./postItem/PostsItem";
import {getPostsAC} from "../../store/slices/postSlice";
import {SearchPost} from "./searchPost/SearchPost";
import {usePostsForRender} from "../../utils/customHook/HookForPosts";
import {Button, Container} from "react-bootstrap";

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
            <SearchPost searchValue={searchValue} handleSearch={handleSearch} handleClear={handleClear}/>
            {filteredPostsByTitle.map((post, index) =>
                <PostsItem post={post} key={index}/>
            )}
            <Container className={"pt-2"}>
                <Button variant={"outline-secondary"}
                        onClick={prevPageHandler} disabled={postsPage === minPage}>Prev</Button>{' '}
                <Button variant={"outline-secondary"}
                        onClick={nextPageHandler} disabled={postsPage === maxPage}>Next</Button>
            </Container>
        </div>
    );
};

