import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { DataBaseInterface } from "../types/types";

// export const getHistoryFilms = async (userEmail: string) => {
//   const filmsRef = collection(db, `${userEmail}history`);
//   const data = await getDocs(filmsRef);

//   return data;
// };

export const getHistoryFilms = async (userEmail: string) => {
  const filmsRef = collection(db, `${userEmail}history`);

  const data = await getDocs(filmsRef);
  return data.docs.map((doc) => ({
    ...(doc.data() as DataBaseInterface),
    filmId: doc.id,
  }));
};
