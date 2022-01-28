import React, { useContext } from "react";
import { arcontext } from "../context/arcontext";

function ScoreEX(props) {
  let { ar } = useContext(arcontext);
  let first = ar[0].first;
  let end = ar[0].end;
  let amount = ar[0].amount;
  let total = ar[0].total.toFixed(3);

  return (
    <div className="mt-5">
      <h2 className="text-center">{amount} <span className="text-success">{first}</span> = {total} <span className="text-success">{end}</span></h2>
      <br />
      <h3>
        Date: <br />
        <span>{new Date().toLocaleString()}</span>
      </h3>
    </div>
  );
}

export default ScoreEX;
