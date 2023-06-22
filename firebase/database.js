// import { database } from "./firebase.config";
// import { getDatabase, ref, set } from "firebase/database";

//Get user question from contact form with firebase realtime database
import { database } from "./firebase.config";
import { set, ref } from "firebase/database";

export function writeUserData(name, company, phone, email, message, userId) {
  return new Promise((resolve, reject) => {
    set(ref(database, "contacts/" + userId), {
      name,
      company,
      phone,
      email,
      message,
      userId,
      date: new Date().toLocaleString(),
    })
      .then(() => {
        resolve("success");
        new Date().toLocaleString();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
