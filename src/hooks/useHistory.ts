// import { getDocs, collection, setDoc, doc } from "firebase/firestore";
// import { db } from "../config/firebase-config";

// export interface HistoryFilmInterface {
//   id: number;
//   posterUrl: string;
//   nameRu: string;
//   ratingKinopoisk: number;
//   year: number;
// }

// export const useHistory = (key: string) => {
//   const addToHistory = async (value: HistoryFilmInterface) => {
//     try {
//       await setDoc(doc(db, `${key}history`, String(value.id)), value);
//     } catch (error) {
//       console.error(`Error from Firebase ${error}`);
//     }
//   };

//   const getHistory = async () => {
//     try {
//       const docSnap = await getDocs(collection(db, key));
//       const films = docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

//       return films;
//     } catch (error) {
//       console.error("Error from firebase", error);
//     }
//   };

//   return { addToHistory, getHistory };
// };
