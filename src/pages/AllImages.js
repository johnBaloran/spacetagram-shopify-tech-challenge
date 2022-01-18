import { useState } from "react";
import Image from "../components/Image";
import Button from "../components/Button";
const AllImages = ({ photos }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  return (
    <>
      {photos.map((photo) => {
        return (
          <>
            <Image photo={photo} />
            <Button
              photo={photo}
              likedPhotos={likedPhotos}
              setLikedPhotos={setLikedPhotos}
            />
          </>
        );
      })}
    </>
  );
};

export default AllImages;
