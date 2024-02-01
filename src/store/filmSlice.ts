import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  DataInterface,
  FilmResponseInterface,
  FilmInterface,
} from "../api/api.interface";

const convertFimlForUi = (data: FilmInterface): FilmResponseInterface => ({
  description: data.description,
  genres: data.genres,
  countries: data.countries,
  posterUrl: data.posterUrl,
  ratingKinopoisk: data.ratingKinopoisk,
  year: data.year,
  nameRu: data.nameRu,
});

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
    getFilmInfo: builder.query<FilmResponseInterface, string>({
      query: (id: string) => ({
        url: `/api/v2.2/films/${id}`,
      }),
      transformResponse: (response: FilmInterface): FilmResponseInterface => {
        return convertFimlForUi(response);
      },
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmInfoQuery } = filmSlice;
