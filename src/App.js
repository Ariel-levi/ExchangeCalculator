import React from "react";
import "./App.css";
import Convertor from "./convertor";
import Exchange from "./exchange_comps/exchange";

function App() {
  return (
    <React.Fragment>
      <Exchange />
      {/* <Convertor /> */}
    </React.Fragment>
  );
}

export default App;
