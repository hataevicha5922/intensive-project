import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { SearchFilmInterface, SearchResultInterface } from "../types";
import { API_KEY } from "../../helpers/API";

export const searchSlice = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "aplication/json"),
        headers.set("X-API-KEY", API_KEY);
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
