import { useState } from "react";

const Button = ({ photo, likedPhotos, setLikedPhotos }) => {
  const [isLiked, setIsLiked] = useState(false);

  const likingPhoto = (photoObj) => {
    setLikedPhotos((prev) => [...prev, photoObj]);
    setIsLiked(true);
  };

  const unlikingPhoto = (photoDate) => {
    setIsLiked(false);
    const newLikedPhotos = likedPhotos.filter((photo) => {
      console.log(photoDate, photo.date);

      return photoDate !== photo.date;
    });
    setLikedPhotos(newLikedPhotos);
  };

  console.log(likedPhotos);

  return (
    <>
      {!isLiked && <button onClick={() => likingPhoto(photo)}>Like</button>}
      {isLiked && (
        <button onClick={() => unlikingPhoto(photo.date)}>Unlike</button>
      )}
    </>
  );
};

export default Button;
