import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {put} from "redux-saga/effects";
import {ResponseUserType, userAPI} from "../../api/userAPI";

interface initialStateType {
    users: ResponseUserType[]
}

const initialState: initialStateType = {
    users: []
}

export function* getUsersSagaWorker(action: PayloadAction<number>): any {
    try {
        const res = yield userAPI.getUsers(action.payload);
        const payload = res.data;
        yield put(getUsersSuccess(payload));
    } catch (e) {
        console.log(e);
    }
}

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsersSuccess: (state, action: PayloadAction<ResponseUserType[]>) => {
            state.users = action.payload;
        }
    }
})

export const GET_USERS = "/userPage"
export const getUsers = createAction<number>(GET_USERS);

export const {getUsersSuccess} = UserSlice.actions
export default UserSlice.reducer