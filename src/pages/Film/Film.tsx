import { useParams } from "react-router-dom";
import { createContext } from "react";
import { DescriptionContextInterface } from "../../api/api.interface";
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
  };

  if (data) {
    return (
      <MyDescriptionFilmContext.Provider value={descriptionContext}>
        <FilmInfo
          posterUrl={data.posterUrl}
          genres={data.genres}
          countries={data.countries}
        />
      </MyDescriptionFilmContext.Provider>
    );
  }
};
