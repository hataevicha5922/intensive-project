import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import s from "./Menu.module.css";

import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import { URL, KEY } from "../../helpers/API";

import { NewsInterface } from "../../api/api.interface";
import { MenuList } from "./MenuList/MenuList";

export function Menu() {
  const [responseData, setResponseData] = useState<NewsInterface[]>([]);
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
      const newsData = data.items;
      setResponseData(newsData);
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
      <div className={s["head"]}>
        <Headling>Menu</Headling>
        <Search placeholder="Search" />
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && <MenuList data={responseData} />}
        {isLoading && <>Loading...</>}
      </div>
    </>
  );
}
