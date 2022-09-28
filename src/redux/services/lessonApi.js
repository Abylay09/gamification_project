import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// 

export const lessonApi = createApi({
    reducerPath: 'lessonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://195.49.212.191:8779/lessons/",
        prepareHeaders: (headers, {getState}) => {
            const token = localStorage.getItem("token");
            if (token) {
            headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (build) => ({
        getLessonsGroup: build.query({
            // query: (id) => `lessons-group/${id}`,
            query: (id ) => ({
                url: `lessons-group`,
                params: {
                    "uid": id
                }
            })
        })
    })
})

export const { useGetLessonsGroupQuery } = lessonApi;