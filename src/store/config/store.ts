import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {takeEvery} from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import posts, {GET_POSTS, GET_POSTS_FOR_USER, getPostsForUserSagaWorker, getPostsSagaWorker} from "../slices/postSlice";
import comments, {GET_COMMENTS, getCommentsSagaWorker} from "../slices/commentSlice";
import users, {GET_USERS, getUsersSagaWorker} from "../slices/userSlice";
import error from "../slices/errorSlice";

const sagaMiddleware = createSagaMiddleware()

function* sagasWatcher() {
    yield takeEvery(GET_POSTS, getPostsSagaWorker)
    yield takeEvery(GET_COMMENTS, getCommentsSagaWorker)
    yield takeEvery(GET_USERS, getUsersSagaWorker)
    yield takeEvery(GET_POSTS_FOR_USER, getPostsForUserSagaWorker)
}


export const store = configureStore({
    reducer: {
        posts,
        comments,
        users,
        error
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagasWatcher)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;