import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {put} from "redux-saga/effects";
import {ResponseUserType, userAPI} from "../../api/userAPI";

interface initialStateType {
    user: ResponseUserType[]
}

const initialState: initialStateType = {
    user: []
}

export function* getUsersSagaWorker(action: PayloadAction<number>): any {
    try {
        const res = yield userAPI.getUsers(action.payload);
        const payload = res.data;
        yield put(getUserSuccess(payload));
    } catch (e) {
        console.log(e);
    }
}

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUserSuccess: (state, action: PayloadAction<ResponseUserType[]>) => {
            state.user = action.payload;
        }
    }
})

export const GET_USERS = "/userPage"
export const getUser = createAction<number>(GET_USERS);

export const {getUserSuccess} = UserSlice.actions
export default UserSlice.reducer