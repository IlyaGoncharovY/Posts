import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postsAPI, ResponseGetPostType} from "../../api/postsAPI";
import {put} from "redux-saga/effects";

interface initialStateType {
    posts: ResponseGetPostType[]
}

const initialState: initialStateType = {
    posts: []
}

export function* getPostsSaga(): any {
    const payload = yield postsAPI.getPosts().then((res) => res.data)
    yield put(getPostsSuccess(payload))
}

const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostsSuccess: (state, action: PayloadAction<ResponseGetPostType[]>) => {
            state.posts = action.payload
        }
    }
})

export const GET_POSTS = "posts/GetPosts"
export const getPosts = createAction(GET_POSTS)

export const {getPostsSuccess} = PostsSlice.actions
export default PostsSlice.reducer