import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postsAPI, ResponseGetPostType} from "../../api/postsAPI";
import {put, delay} from "redux-saga/effects";
import {setError} from "./errorSlice";
import {AxiosError} from "axios";

interface initialStateType {
    // posts: ResponseGetPostType[]
    postsForUser: ResponseGetPostType[]
    filteredPosts: ResponseGetPostType []
    postsPage: number
    loading: boolean
}

const initialState: initialStateType = {
    // posts: [],
    postsForUser: [],
    filteredPosts: [],
    postsPage: 1,
    loading: false
}

export function* getPostsSagaWorker(action: PayloadAction<number>): any {
    try {
        yield put(setLoading(true))
        yield delay(500)

        const res = yield postsAPI.getPosts(action.payload);
        const payload = res.data;
        yield put(getPostsSuccess(payload));
    } catch (e) {
        const error = e as Error | AxiosError<{ error: string }>
        yield put(setError(error.message))
    } finally {
        yield put(setLoading(false))
    }
}

export function* getPostsForUserSagaWorker(action: PayloadAction<number>): any {
    try {
        yield put(setLoading(true))
        yield delay(500)

        const res = yield postsAPI.getPostsForUser(action.payload);
        const payload = res.data;
        yield put(getPostsForUser(payload));
    } catch (e) {
        const error = e as Error | AxiosError<{ error: string }>
        yield put(setError(error.message))
    } finally {
        yield put(setLoading(false))
    }
}

const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostsSuccess: (state, action: PayloadAction<ResponseGetPostType[]>) => {
            // state.posts = action.payload;
            state.filteredPosts = action.payload
        },
        getPostsForUser: (state, action: PayloadAction<ResponseGetPostType[]>) => {
            state.postsForUser = action.payload
        },
        nextPage: (state, action: PayloadAction<number>) => {
            state.postsPage = action.payload += 1
        },
        prevPage: (state, action: PayloadAction<number>) => {
            if (state.postsPage > 1) {
                state.postsPage = action.payload -= 1
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    }
})

export const GET_POSTS = "/postPage"
export const getPostsAC = createAction<number>(GET_POSTS);

export const GET_POSTS_FOR_USER = "/postsForUser"
export const getPostsForUserAC = createAction<number>(GET_POSTS_FOR_USER)

export const {getPostsSuccess, getPostsForUser, nextPage, prevPage, setLoading} = PostsSlice.actions
export default PostsSlice.reducer