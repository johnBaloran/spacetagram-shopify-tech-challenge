import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <h1>Spacetagram</h1>
      <Link to="/">Home</Link>
      <Link to="/liked-photos">Liked Photos</Link>
    </nav>
  );
};

export default Header;
