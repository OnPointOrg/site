import { useState, useEffect } from "react";
import {
  projectStorage,
  firestoreDatabase,
  timestamp,
} from "../firebase/config";

const useStorage = (file, location) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(`${location}/` + file.name);
    const collectionRef = firestoreDatabase.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setUrl(url);
        console.log(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;