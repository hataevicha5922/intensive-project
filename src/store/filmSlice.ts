import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DataInterface } from "../api/api.interface";

export const filmSlice = createApi({
  reducerPath: "film",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "aplication/json"),
        headers.set("X-API-KEY", "fb315d78-932c-4a3a-b771-0e3924b17519");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<DataInterface, number>({
      query: (limit: number = 5) => ({
        url: "/api/v2.2/films",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetFilmsQuery } = filmSlice;
