import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    phone: "",
    sms: "",
    password: ""
}


export const restoreSlice = createSlice({
    name : 'restoreSlice',
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
        },
        setSms: (state, action) => {
            state.sms += action.payload
            console.log(state.sms);
        },
        removeSms: (state) => {
            state.sms = ""
        }
    }
})

export const {nextStep, setPhone, setPassword, setSms, removeSms} = restoreSlice.actions;
export default restoreSlice.reducer;