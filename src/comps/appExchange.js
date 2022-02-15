import React, { useState } from "react";
import InputEX from "./inputEX";
import ScoreEX from "./scoreEX";
import { arcontext } from "../context/arcontext";

function AppExchange(props) {  
  let [ar, setAr] = useState([
    { total: 0, amount: 0, from: "", to: "" },
  ]);

  return (
    <arcontext.Provider value={{ ar: ar, setAr: setAr }}>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <img src="/images/caculation.png" width="200"  />
        </div>
        <h1 className="text-center mt-5 titel"> Exchange Calculator</h1>
        <div className="blurbg my-5">
          <InputEX />
          <ScoreEX />
        </div>
      </div>
    </arcontext.Provider>
  );
}

export default AppExchange;
