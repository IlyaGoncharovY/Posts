import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postsAPI, ResponseGetPostType} from "../../api/postsAPI";
import {put} from "redux-saga/effects";

interface initialStateType {
    posts: ResponseGetPostType[]
    postsForUser: ResponseGetPostType[]
    postsPage: number
}

const initialState: initialStateType = {
    posts: [],
    postsForUser: [],
    postsPage: 1
}

export function* getPostsSagaWorker(action: PayloadAction<number>): any {
    try {
        const res = yield postsAPI.getPosts(action.payload);
        const payload = res.data;
        yield put(getPostsSuccess(payload));
    } catch (e) {
        console.log(e);
    }
}

export function* getPostsForUserSagaWorker(action: PayloadAction<number>): any {
    try {
        const res = yield postsAPI.getPostsForUser(action.payload);
        const payload = res.data;
        yield put(getPostsForUser(payload));
    } catch (e) {
        console.log(e);
    }
}

const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostsSuccess: (state, action: PayloadAction<ResponseGetPostType[]>) => {
            state.posts = action.payload;
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
        }
    }
})

export const GET_POSTS = "/postPage"
export const getPostsAC = createAction<number>(GET_POSTS);

export const GET_POSTS_FOR_USER = "/postsForUser"
export const getPostsForUserAC = createAction<number>(GET_POSTS_FOR_USER)

export const {getPostsSuccess, getPostsForUser, nextPage, prevPage} = PostsSlice.actions
export default PostsSlice.reducer