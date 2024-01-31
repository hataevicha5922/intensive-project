import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import { URL, KEY } from "../../helpers/API";

import { FilmInterface } from "../../api/api.interface";
import { FilmList } from "./FilmList/FilmList";

export function Films() {
  const [responseData, setResponseData] = useState<FilmInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${URL}/api/v2.2/films
      `,
        {
          headers: {
            "Content-Type": "aplication/json",
            "X-API-KEY": `${KEY}`,
          },
        }
      );
      const filmsData = data.items;
      setResponseData(filmsData);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
      console.error(error);
      return;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {error && <>{error}</>}
        {!isLoading && <FilmList data={responseData} />}
        {isLoading && <>Loading...</>}
      </div>
    </>
  );
}
