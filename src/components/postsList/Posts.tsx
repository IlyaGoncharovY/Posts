import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/config/hook";
import {PostsItem} from "./postItem/PostsItem";
import {getPostsAC} from "../../store/slices/postSlice";
import {SearchPost} from "./searchPost/SearchPost";
import {usePostsForRender} from "../../utils/customHook/HookForPosts";
import {Button, Container, Spinner} from "react-bootstrap";
import {ErrorMessage} from "../../common/components/ErrorMessage";

export const Posts = () => {

    const {
        filteredPostsByTitle, postsPage,
        searchValue, handleSearch, handleClear,
        nextPageHandler, prevPageHandler, minPage, maxPage
    } = usePostsForRender()

    const loading = useAppSelector(state => state.posts.loading)
    const error = useAppSelector(state => state.error.error)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPostsAC(postsPage))
    }, [dispatch, postsPage])

    return (
        <div>
            {error && <ErrorMessage error={error}/>}
            <SearchPost searchValue={searchValue} handleSearch={handleSearch} handleClear={handleClear}/>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                filteredPostsByTitle.map((post, index) =>
                    <PostsItem post={post} key={index}/>
                )
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

