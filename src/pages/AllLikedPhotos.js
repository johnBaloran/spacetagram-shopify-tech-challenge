import React, { useContext } from "react";
import Context from "../context/context";
import Image from "../components/Image";
import Button from "../components/Button";
const AllLikedPhotos = () => {
  const ctx = useContext(Context);
  return (
    <>
      {ctx.likedPhotos.map((photo) => (
        <>
          <Image photo={photo} />
          <Button photo={photo} />
        </>
      ))}
    </>
  );
};

export default AllLikedPhotos;
