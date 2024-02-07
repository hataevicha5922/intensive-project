import { useEffect } from "react";
import { addUser, store } from "../store";
import { getUser } from "../utils";

export const useUserAuth = () => {
  useEffect(() => {
    const user = getUser();
    if (user) {
      store.dispatch(addUser(user));
    }
  }, []);
};
