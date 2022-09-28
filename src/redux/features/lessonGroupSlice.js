import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title : "",
    nextPage : "",
    prevPage : "",
    order : ""
}

export const lessonGroupSlice = createSlice({
    name : "lessonGroup",
    initialState,
    reducers : {
        setNextPage : (state, action) => {
            state.nextPage = action.payload
        },
        setPrevPage : (state, action) => {
            state.prevPage = action.payload
        },
        setTitle : (state, action) => {
            state.title = action.payload
        },
        setOrder : (state, action) => {
            state.order = action.payload
        }
    }
})

export const {setNextPage, setPrevPage, setTitle, setOrder} = lessonGroupSlice.actions;
export default lessonGroupSlice.reducer;