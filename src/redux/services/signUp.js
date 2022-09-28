import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const signUpApi = createApi({
    reducerPath: 'signUpApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://195.49.212.191:8779/user" }),
    endpoints: (build) => ({
        signUp: build.mutation({
            query: (user) => ({
                url: `/signup `,
                method: 'POST',
                body : user
            })
        }),
    })
})

export const { useSignUpMutation } = signUpApi;