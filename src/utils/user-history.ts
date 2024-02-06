import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";

// export const userHistory = {
//      getHistoryFilms: async (ref: string) => {
//         const data = await getDocs(filmsRef);

//         return data
//         // setHistoryfilms(
//         //   data.docs.map((doc) => ({
//         //     ...(doc.data() as DataBaseInterface),
//         //     filmId: doc.id,
//         //   }))
//         // );
//       };
// }

export const getHistoryFilms = async (userEmail: string) => {
  const filmsRef = collection(db, `${userEmail}history`);
  const data = await getDocs(filmsRef);

  return data;
};
