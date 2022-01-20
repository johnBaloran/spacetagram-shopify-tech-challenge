import React from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

import { useState, useEffect } from "react";

const useFireBase = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const getLikedPhotos = async () => {
    const data = await getDocs(usersCollectionRef);
    // getting likedPhotos from firestore
    setLikedPhotos(
      data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  };
  const usersCollectionRef = collection(db, "likedPhotos");
  const createNewLikedPhoto = async (newLikedPhoto) => {
    await addDoc(usersCollectionRef, { ...newLikedPhoto });
  };
  const deleteLikedPhoto = async (id) => {
    const photoDoc = doc(db, "likedPhotos", id);
    await deleteDoc(photoDoc);
  };

  useEffect(() => {
    getLikedPhotos();
  }, []);

  return {
    createNewLikedPhoto,
    deleteLikedPhoto,
    getLikedPhotos,
    likedPhotos,
    setLikedPhotos,
  };
};

export default useFireBase;
