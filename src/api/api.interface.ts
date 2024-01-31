type CountriesType = {
  country: string;
};

export type GenresType = {
  genre: string;
};

export interface FilmInterface {
  countries: CountriesType[];
  genres: GenresType[];
  imdbId: string;
  kinopoiskId: number;
  nameEn: string | null;
  nameOriginal: string | null;
  nameRu: string | null;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: string;
  year: number;
}
