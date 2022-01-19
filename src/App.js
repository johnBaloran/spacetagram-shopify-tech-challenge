import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import AllImages from "./pages/AllImages";
import Header from "./components/Header";
import AllLikedPhotos from "./pages/AllLikedPhotos";
import Context from "./context/context";
const apiKey = "rZwEA3N4xhZyODBzxCrfoA6P6HYJHj2eKnN9F9Jj";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [stayLiked, setStayLiked] = useState(null);
  const getNasaPhotos = async () => {
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
    console.log(`${year}-${month}-${day}`);

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${year}-${month}-${day}
      `
    );
    console.log(response);

    const data = await response.json();

    setPhotos((prev) => {
      return [...prev, data];
    });
  };

  useEffect(() => {
    getNasaPhotos();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (event) => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      getNasaPhotos();
      console.log("hello");
    }
  };

  return (
    <div className="App">
      <Context.Provider
        value={{
          likedPhotos: likedPhotos,
          setLikedPhotos: setLikedPhotos,
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<AllImages photos={photos} />} />
            <Route path="/liked-photos" element={<AllLikedPhotos />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};

export default App;
