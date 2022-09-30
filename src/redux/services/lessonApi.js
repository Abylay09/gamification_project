import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// 

export const lessonApi = createApi({
    reducerPath: 'lessonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://195.49.212.191:8779/lessons/",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (build) => ({
        getLessonsGroup: build.query({
            query: (id) => ({
                // async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                //     // get a random user
                //     const randomResult = await fetchWithBQ('users/random')
                //     if (randomResult.error) return { error: randomResult.error }
                //     const user = randomResult.data
                //     const result = await fetchWithBQ(`user/${user.id}/posts`)
                //     return result.data ? { data: result.data } : { error: result.error }
                //   },
                url: `lessons-group`,
                method: "GET",
                params: {
                    "uid": id
                }
            })
        }),
        // getLesson: build.query({
        //     query: (id) => ({
        //         url: `lesson`,
        //         method: "GET",
        //         params: {
        //             "uid": id
        //         }
        //     })
        // })
    })
})

export const { useGetLessonsGroupQuery, useGetLessonQuery } = lessonApi;