import { useEffect } from "react";
import { MainRouter } from "../../components/MainRouter";
import { useAppDispatch, useAppSelector, useUserAuth } from "../../hooks";
import {
  getFavoriteFilmsIsFetchingSelector,
  getUserSelector,
  resetFavorites,
} from "../../store";
import { getFavoritesFilms } from "../../utils";

export const GlobalLayout = () => {
  const dispatch = useAppDispatch();
  useUserAuth();
  const user = useAppSelector(getUserSelector)!;
  const isFetching = useAppSelector(getFavoriteFilmsIsFetchingSelector);

  useEffect(() => {
    if (user?.email && !isFetching) {
      getFavoritesFilms(user.email);
    } else if (!user?.email && isFetching) {
      dispatch(resetFavorites());
    }
  }, [user?.email, isFetching]);

  return (
    <>
      <MainRouter />
    </>
  );
};
