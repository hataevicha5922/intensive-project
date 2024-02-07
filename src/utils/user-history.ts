import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";


export const getHistoryFilms = async (userEmail: string) => {
  const filmsRef = collection(db, `${userEmail}history`);
  const data = await getDocs(filmsRef);

  return data;
};
