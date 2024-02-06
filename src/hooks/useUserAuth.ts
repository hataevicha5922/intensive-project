import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { UserContextInterface } from "../types/types";

export const useUserAuth = (key: string) => {
  const logInUser = (value: UserContextInterface) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getUser = () => {
    return localStorage.getItem(key);
  };

  const logOutUser = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return { logInUser, getUser, logOutUser };
};
