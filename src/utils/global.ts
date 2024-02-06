import { signOut } from "firebase/auth";

import { auth } from "../config/firebase-config";
import { UserContextInterface } from "../types/types";

export const getUser = () => {
  const userData = localStorage.getItem("user");

  return userData ? JSON.parse(userData) : null;
};

export const logInUser = (value: UserContextInterface) => {
  localStorage.setItem("user", JSON.stringify(value));
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    console.error(error);
  }
};
