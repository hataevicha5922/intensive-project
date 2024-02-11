import { useEffect } from "react";
import { addUser, authorizeChecked } from "../store";
import { getUser } from "../utils";
import { useAppDispatch } from ".";

export const useUserAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const user = getUser();
    if (user) {
      dispatch(addUser(user));
    }
    dispatch(authorizeChecked());
  }, []);
};
