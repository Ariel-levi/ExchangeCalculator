import React, { useState } from "react";
import InputEX from "./inputEX";
import ScoreEX from "./scoreEX";
import { arcontext } from "../context/arcontext";

function AppExchange(props) {
  let [ar, setAr] = useState([
    { total: 100, amount: 100, first: "USD", end: "USD" },
  ]);

  return (
    <arcontext.Provider value={{ ar: ar, setAr: setAr }}>
      <div className="container">
        <h1 className="text-center mt-5 titel"> Exchange Calculator</h1>
        <div className="blurbg">
          <InputEX />
          <ScoreEX />
        </div>
      </div>
    </arcontext.Provider>
  );
}

export default AppExchange;
