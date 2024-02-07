export interface FavoritesFilmInterface {
    posterUrl: string;
    description: string;
    nameRu: string;
    ratingKinopoisk: number;
    year: number;
  }
  export type FavoritesState = {
    films: FavoritesFilmInterface[];
  };