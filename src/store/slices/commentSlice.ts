import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {put} from "redux-saga/effects";
import {commentsAPI, ResponseGetCommentsType} from "../../api/commentsAPI";

interface initialStateType {
    comments: ResponseGetCommentsType[]
    // activateWindow: boolean
    activePostId: number | null
}

const initialState: initialStateType = {
    comments: [],
    // activateWindow: false
    activePostId: null
}

export function* getCommentsSagaWorker(action: PayloadAction<number>): any {
    try {
        const res = yield commentsAPI.getComments(action.payload);
        const payload = res.data;
        yield put(getCommentsSuccess(payload));
    } catch (e) {
        console.log(e);
    }
}

const CommentsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getCommentsSuccess: (state, action: PayloadAction<ResponseGetCommentsType[]>) => {
            state.comments = action.payload
        },
        activateCommentsWindow: (state, action:PayloadAction<number | null>) => {
            state.activePostId = action.payload
        }
    }
})

export const GET_COMMENTS = "/commentsPage"
export const getCommentsAC = createAction<number>(GET_COMMENTS);


export const {getCommentsSuccess, activateCommentsWindow} = CommentsSlice.actions
export default CommentsSlice.reducer