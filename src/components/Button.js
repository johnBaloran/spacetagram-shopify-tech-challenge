import { useContext, useState, useEffect } from "react";
import Context from "../context/context";

const Button = ({ photo }) => {
  const ctx = useContext(Context);
  const [isLiked, setIsLiked] = useState(false);
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

  console.log(
    ctx.likedPhotos.filter((image) => image.date === photo.date).length
  );

  const likingPhoto = (photoObj) => {
    ctx.setLikedPhotos((prev) => [...prev, photoObj]);

    setIsLiked(true);
  };

  const unlikingPhoto = (photoDate) => {
    setIsLiked(false);
    const newLikedPhotos = ctx.likedPhotos.filter((photo) => {
      return photoDate !== photo.date;
    });
    ctx.setLikedPhotos(newLikedPhotos);
  };
  console.log(ctx.likedPhotos);

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
