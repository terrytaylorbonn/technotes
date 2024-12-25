import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
//    baseQuery: fetchBaseQuery({ baseUrl: 'https://technotes-api-ttbonn.onrender.com' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://technotes-api-2b45.onrender.com/' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})