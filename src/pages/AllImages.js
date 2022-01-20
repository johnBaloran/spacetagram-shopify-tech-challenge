import { useState } from "react";
import Image from "../components/Image";
import Button from "../components/Button";
const AllImages = ({ photos }) => {

  return (
    <>
      {photos.map((photo) => {
        return (
          <>
            <Image photo={photo} />
            <Button
              photo={photo}
              
            />
          </>
        );
      })}
    </>
  );
};

export default AllImages;
