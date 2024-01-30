// export interface FilmInterface {
//   adspace: string;
//   body: string;
//   date: string;
//   image: string;
//   live: boolean;
//   tabTitle: string;
//   id: string;
//   title: string;
// }
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
