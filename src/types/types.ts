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
  nameRu: string;
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
export interface FilmInfoPropsInterface {
  genres: GenresType[];
  countries: CountriesType[];
  posterUrl: string;
}

export interface DescriptionContextInterface {
  ratingKinopoisk: number | undefined;
  year: number | undefined;
  nameRu: string | undefined;
  description: string | undefined;
  posterUrl: string | undefined;
  id: string | undefined
}

export interface UserContextInterface {
  email: string;
  uid: string;
}

export interface FilmSearchResultsInterface {
  searchTerm: string;
}

export interface SearchResultInterface {
  keyword: string;
  pagesCount: number;
  films: SearchFilmInterface[];
  searchFilsCountResult: number;
}

export interface SearchFilmInterface {
  countries: CountriesType[];
  description: string;
  filmId: number;
  filmLength: string;
  genres: GenresType[];
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingVoteCount: number;
  type: string;
  year: string;
}

export interface TransformedSearchFilmsResaultInterface {
  keyword: string;
  films: SearchFilmInterface[];
}

export type UserCredentialsType = {
  email: string;
  password: string;
};

export interface DataBaseInterface {
  id: number;
  posterUrl: string;
  description: string;
  nameRu: string;
  ratingKinopoisk: number;
  year: number;
}

export interface LocalInterface extends DataBaseInterface {
  filmId: string;
}
