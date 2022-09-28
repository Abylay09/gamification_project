import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    phone : "",
    password : ""
}

export const signInApi = createSlice({
    name: "signInApi",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step = state.step + 1
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
            console.log(state.password);
        }
    }
})

export const {nextStep, setPhone, setPassword} = signInApi.actions;
export default signInApi.reducer;