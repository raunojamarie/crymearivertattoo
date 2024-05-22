import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvB1H1stE3CzzooOm4ikkD8hlvPFuxH4",
  authDomain: "crymearivertattoo-531c0.firebaseapp.com",
  projectId: "crymearivertattoo-531c0",
  storageBucket: "crymearivertattoo-531c0.appspot.com",
  messagingSenderId: "647506157220",
  appId: "1:647506157220:web:691b680ed5d40a15ecd031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadJson = (data) => {

  var jsonString = JSON.stringify(data);
  var blob = new Blob([jsonString], {type: "application/json"})

  const fileRef = ref(storage, "files/" + data.name + ".json")

  uploadBytes(fileRef, blob).then(() => {
    console.log("uploaded")
  })
}

export const getAllFiles = async () => {
  const result = [];
  const filesRef = ref(storage, "files/");
  try {
    const response = await listAll(filesRef);
    const promises = response.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const res = await fetch(url);
      const data = await res.json();
      result.push(data);
    });
    await Promise.all(promises);
    return result;
  } catch (error) {
    console.error("Error fetching JSON files:", error);
    throw error;
  }
};
