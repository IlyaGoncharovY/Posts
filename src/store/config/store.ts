import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {takeEvery} from "redux-saga/effects"
import createSagaMiddleware from "redux-saga";
import posts, {GET_POSTS, getPostsSaga} from "../slices/postSlice";

const sagaMiddleware = createSagaMiddleware()

function* sagas() {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery
}

export const store = configureStore({
    reducer: {
        posts
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;