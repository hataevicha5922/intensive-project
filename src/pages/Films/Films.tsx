import { useGetFilmsQuery } from "../../store/filmSlice";

import { FilmList } from "./FilmList/FilmList";

export function Films() {
  const { data, isLoading, error } = useGetFilmsQuery(5);

  if (data) {
    return (
      <>
        <div>
          {error && <>{error}</>}
          {!isLoading && <FilmList data={data.items} />}
          {isLoading && <>Loading...</>}
        </div>
      </>
    );
  }
}
