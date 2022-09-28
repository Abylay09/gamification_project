import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const signIn = createApi({
    reducerPath: 'signInApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://195.49.212.191:8779/user" }),
    endpoints: (build) => ({
        signin: build.mutation({
            query: (user) => ({
                url: `/signin`,
                method: 'POST',
                body : user
            })
        }),
    })
})

export const { useSigninMutation } = signIn;