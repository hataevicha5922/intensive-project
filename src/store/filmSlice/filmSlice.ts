import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmInterface, FilmInterfaceFromApi } from "../../types/types";
import { FilmResponseInterface, DataInterface } from "../types";
import { API_KEY } from "../../helpers/API";

const convertFilmForUi = ({
  kinopoiskId,
  description,
  posterUrl,
  ratingKinopoisk,
  year,
  nameRu,
}: FilmResponseInterface): FilmInterface => ({
  id: kinopoiskId,
  description,
  posterUrl,
  ratingKinopoisk,
  year,
  nameRu: nameRu ?? description,
});

export const filmSlice = createApi({
  reducerPath: "film",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "aplication/json"),
        headers.set("X-API-KEY", API_KEY);
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
    getFilmInfo: builder.query<FilmInterface, string>({
      query: (id: string) => ({
        url: `/api/v2.2/films/${id}`,
      }),
      transformResponse: (response: FilmInterfaceFromApi): FilmInterface => {
        return convertFilmForUi(response);
      },
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmInfoQuery } = filmSlice;
