import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    mail: null,
    password: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.mail = action.payload.mail
            state.password = action.payload.password
        }
    }
});

export const {reducerSetLogin} = loginSlice.actions
export default loginSlice.reducer