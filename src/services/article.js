import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const apiKey = import.meta.env.API_KEY;



export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '4abe491c6cmsh40aa16c29d98de0p1df9b8jsna8186708223b')
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;