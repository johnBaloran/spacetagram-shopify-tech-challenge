import { useContext, useState, useEffect } from "react";
import Context from "../context/context";
import useFireBase from "../hooks/useFireBase";

const Button = ({ photo }) => {
  const ctx = useContext(Context);
  const [isLiked, setIsLiked] = useState(false);
  const { createNewLikedPhoto, deleteLikedPhoto } = useFireBase();

  useEffect(() => {
    if (
      ctx.likedPhotos.filter((image) => {
        console.log(image.date, photo.date);

        return image.date === photo.date;
      }).length >= 1
    ) {
      setIsLiked(true);
    }
  }, []);

  const likingPhoto = (photoObj) => {
    // ctx.setLikedPhotos((prev) => [...prev, photoObj]);
    console.log(photoObj);

    setIsLiked(true);
    createNewLikedPhoto(photoObj);
  };

  const unlikingPhoto = (photoDate) => {
    setIsLiked(false);
    const unlikedPhoto = ctx.likedPhotos.filter((photo) => {
      console.log(photoDate, photo.date, photo);

      return photoDate === photo.date;
    });
    console.log(unlikedPhoto);

    // ctx.setLikedPhotos(newLikedPhotos);
    deleteLikedPhoto(unlikedPhoto[0].id);
  };

  return (
    <>
      {}
      {!isLiked && <button onClick={() => likingPhoto(photo)}>Like</button>}
      {isLiked && (
        <button onClick={() => unlikingPhoto(photo.date)}>Unlike</button>
      )}
    </>
  );
};

export default Button;
