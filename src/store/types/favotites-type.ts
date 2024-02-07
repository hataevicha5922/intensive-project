export interface FavoritesFilmInterface {
  id: number;
  posterUrl: string;
  description: string;
  nameRu: string;
  ratingKinopoisk: number;
  year: number;
}

export type FavoritesState = {
  films: FavoritesFilmInterface[];
  isFetching: boolean;
};
