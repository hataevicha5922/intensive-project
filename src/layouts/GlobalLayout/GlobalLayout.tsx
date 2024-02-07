import { useEffect } from "react";
import { MainRouter } from "../../components/MainRouter";
import { useAppSelector, useUserAuth } from "../../hooks";
import {
  getFavoriteFilmsIsFetchingSelector,
  getUserSelector,
  resetFavorites,
  store,
} from "../../store";
import { getFavoritesFilms } from "../../utils";

export const GlobalLayout = () => {
  useUserAuth();
  const user = useAppSelector(getUserSelector)!;
  const isFetching = useAppSelector(getFavoriteFilmsIsFetchingSelector);

  useEffect(() => {
    if (user?.email && !isFetching) {
      getFavoritesFilms(user.email);
    } else if (!user?.email && isFetching) {
      store.dispatch(resetFavorites());
    }
  }, [user?.email, isFetching]);

  return (
    <>
      <MainRouter />
    </>
  );
};
