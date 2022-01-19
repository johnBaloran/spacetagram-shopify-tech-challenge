import React from "react";

const Context = React.createContext({
  isSubmitted: false,
  grabObject: () => {},
});

export default Context;
