import { createContext, useContext } from "react";
import { DescriptionContextInterface } from "../../api/api.interface";

export const MyDescriptionFilmContext = createContext<DescriptionContextInterface>({
  ratingKinopoisk: 1,
  year: 1,
  nameRu: "",
  description: "",
});

export const useDescriptionFilmContext = useContext(MyDescriptionFilmContext)
