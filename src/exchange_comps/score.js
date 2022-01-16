import React, { useContext } from "react";
import { ExchangeContext } from "../context/exchangeContext";

function Score(props) {
  let { finalVal } = useContext(ExchangeContext);
  return (
    <div>
      <h1>score:</h1>
      <h2>{finalVal}</h2>
    </div>
  );
}

export default Score;
