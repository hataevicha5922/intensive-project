export type CountriesType = {
  country: string;
};

export type GenresType = {
  genre: string;
};

export interface FilmsInterface {
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

export interface DataInterface {
  items: FilmsInterface[];
}

export interface FilmInterface {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: CountriesType[];
  genres: GenresType[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface FilmResponseInterface {
  posterUrl: string;
  genres: GenresType[];
  countries: CountriesType[];
  ratingKinopoisk: number;
  year: number;
  nameRu: string;
  description: string;
}
// export interface FilmInfoPropsInter
export interface FilmInfoPropsInterface {
  // description: string;
  genres: GenresType[];
  countries: CountriesType[];
  posterUrl: string;
  // ratingKinopoisk: number;
  // year: number,
  // nameRu: string
}

export interface DescriptionContextInterface {
  ratingKinopoisk: number | undefined;
  year: number | undefined;
  nameRu: string | undefined;
  description: string | undefined;
}
