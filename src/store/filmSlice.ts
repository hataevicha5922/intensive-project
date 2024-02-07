import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmInterface } from "../types/types";
import {
  FilmResponseInterface,
  DataInterface,
  SearchResultInterface,
  TransformedSearchFilmsResultInterface,
} from "./types";

const convertFimlForUi = ({
  description,
  genres,
  countries,
  posterUrl,
  ratingKinopoisk,
  year,
  nameRu,
}: FilmInterface) => ({
  description,
  genres,
  countries,
  posterUrl,
  ratingKinopoisk,
  year,
  nameRu,
});

const convertSearchFilmResponse = ({
  films,
  keyword,
}: SearchResultInterface) => ({
  keyword,
  films: films,
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
    searchFilm: builder.query<TransformedSearchFilmsResultInterface, string>({
      query: (keyword: string) => ({
        url: `/api/v2.1/films/search-by-keyword?keyword=${keyword}`,
      }),
      transformResponse: (
        response: SearchResultInterface
      ): TransformedSearchFilmsResultInterface => {
        return convertSearchFilmResponse(response);
      },
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmInfoQuery, useSearchFilmQuery } =
  filmSlice;
