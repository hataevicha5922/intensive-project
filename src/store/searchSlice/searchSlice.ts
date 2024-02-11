import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SearchFilmInterface, SearchResultInterface } from "../types";

export const searchSlice = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "aplication/json"),
        headers.set("X-API-KEY", "fb315d78-932c-4a3a-b771-0e3924b17519");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchFilm: builder.query<SearchFilmInterface[], string>({
      query: (keyword: string) => ({
        url: `/api/v2.1/films/search-by-keyword?keyword=${keyword}`,
      }),
      transformResponse: (
        response: SearchResultInterface
      ): SearchFilmInterface[] => {
        return response.films;
      },
    }),
  }),
});

export const { useSearchFilmQuery, useLazySearchFilmQuery } = searchSlice;
