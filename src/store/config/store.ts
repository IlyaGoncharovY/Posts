import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {takeEvery} from "redux-saga/effects"
import createSagaMiddleware from "redux-saga";
import posts, {GET_POSTS, getPostsSagaWorker} from "../slices/postSlice";
import comments, {GET_COMMENTS, getCommentsSagaWorker} from "../slices/commentSlice";
import users, {GET_USERS, getUsersSagaWorker} from "../slices/userSlice";

const sagaMiddleware = createSagaMiddleware()

function* sagasWatcher() {
    yield takeEvery(GET_POSTS, getPostsSagaWorker)
    yield takeEvery(GET_COMMENTS, getCommentsSagaWorker)
    yield takeEvery(GET_USERS, getUsersSagaWorker)
}


export const store = configureStore({
    reducer: {
        posts,
        comments,
        users
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