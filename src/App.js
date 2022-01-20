import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import AllImages from "./pages/AllImages";
import Header from "./components/Header";
import AllLikedPhotos from "./pages/AllLikedPhotos";
import Context from "./context/context";
import useNasaPhotos from "./hooks/useNasaPhotos";
import { db } from "./firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import useFireBase from "./hooks/useFireBase";
const App = () => {
  const { photos, setPhotos, getNasaPhotos, handleScroll } = useNasaPhotos();
  const { likedPhotos, setLikedPhotos } = useFireBase();
  const [stayLiked, setStayLiked] = useState(null);
  const usersCollectionRef = collection(db, "likedPhotos");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

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
