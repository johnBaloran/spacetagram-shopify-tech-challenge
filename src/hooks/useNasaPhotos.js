import { useState, useEffect } from "react";
const apiKey = "rZwEA3N4xhZyODBzxCrfoA6P6HYJHj2eKnN9F9Jj";

const randomizedDate = () => {
  const year = Math.floor(Math.random() * (2022 - 1996) + 1996);
  const month = Math.floor(Math.random() * 12 + 1);
  let day;
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    day = Math.floor(Math.random() * 30 + 1);
  } else if (month === 2) {
    day = Math.floor(Math.random() * 28 + 1);
  } else {
    day = Math.floor(Math.random() * 31 + 1);
  }
  return [year, month, day];
};
const useNasaPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const getNasaPhotos = async () => {
    const [year, month, day] = randomizedDate();
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${year}-${month}-${day}
            `
    );
    const data = await response.json();
    setPhotos((prev) => [...prev, data]);
  };
  const handleScroll = (event) => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      getNasaPhotos();
    }
  };
  useEffect(() => {
    getNasaPhotos();
  }, []);

  return { photos, setPhotos, getNasaPhotos, handleScroll };
};

export default useNasaPhotos;
