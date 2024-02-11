import { SearchFilmInterface } from "../../store";

export type SuggestType = {
  films: SearchFilmInterface[];
  searchText: string;
};
