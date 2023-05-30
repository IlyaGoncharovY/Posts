import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initialStateType {
    error: string | null
}

const initialState: initialStateType = {
    error: null,
}


const ErrorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        clearError: (state) => {
            state.error = null
        }
    }
})


export const {setError, clearError} = ErrorSlice.actions
export default ErrorSlice.reducer