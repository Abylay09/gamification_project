import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step : 1,
    phone : "",
    password : "",
    sms : ""
}

export const signUpSlice = createSlice({
    name : "signUpSlice",
    initialState,
    reducers : {
        nextStep : (state) => {
            state.step  = state.step + 1
        },
        setPhone : (state, action) => {
            state.phone = action.payload
        },
        setPassword : (state, action) => {
            state.password = action.payload
            console.log( state.password );
        }
    }
})

export const {nextStep, setPhone, setPassword} = signUpSlice.actions;
export default signUpSlice.reducer;