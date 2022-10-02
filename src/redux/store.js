import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./features/signUpSlice";
import signInSlice from "./features/signInSlice";
import { signUpApi } from "./services/signUp";
import { signIn } from "./services/signIn";
import { lessonApi } from "./services/lessonApi";
import lessonGroupSlice from "./features/lessonGroupSlice";
import restoreSlice from "./features/restoreSlice";
export const store = configureStore({
    reducer: {
        signUp: signUpSlice,
        signIn: signInSlice,
        lessonGroup: lessonGroupSlice,
        restore: restoreSlice,
        [signUpApi.reducerPath]: signUpApi.reducer,
        [signIn.reducerPath]: signIn.reducer,
        [lessonApi.reducerPath]: lessonApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signUpApi.middleware).concat(signIn.middleware).concat(lessonApi.middleware)
})