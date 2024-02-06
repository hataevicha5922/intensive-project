import { useParams } from "react-router-dom";
import { createContext } from "react";
import { DescriptionContextInterface } from "../../types/types";
import { FilmInfo } from "../../components/FilmInfo/FilmInfo";
import { useGetFilmInfoQuery } from "../../store/filmSlice";

type ParamsFilmType = {
  id: string;
};

export const MyDescriptionFilmContext =
  createContext<DescriptionContextInterface>({
    ratingKinopoisk: 1,
    year: 1,
    nameRu: "",
    description: "",
    posterUrl: "",
    id: ""
  });

export const Film = () => {
  const params = useParams<ParamsFilmType>();
  const id = params.id!;
  const { data } = useGetFilmInfoQuery(id);

  const descriptionContext = {
    ratingKinopoisk: data?.ratingKinopoisk,
    year: data?.year,
    nameRu: data?.nameRu,
    description: data?.description,
    posterUrl: data?.posterUrl,
    id: id
  };

  return (
    data && (
      <MyDescriptionFilmContext.Provider value={descriptionContext}>
        <FilmInfo />
      </MyDescriptionFilmContext.Provider>
    )
  );
};
