import React, { useContext } from "react";
import { arcontext } from "../context/arcontext";

function ScoreEX(props) {
  let { ar } = useContext(arcontext);
  let first = ar[0].first;
  let end = ar[0].end;
  let amount = ar[0].amount;
  let total = ar[0].total.toFixed(3);

  return (
    <div className="col-md-6 mx-auto shadow text-center score ">
      <h2>
        {amount} {first} = {total} {end}
      </h2>
      <br />
      <h3>
        Date: <br />
        <span className="text-info">{new Date().toLocaleString()}</span>
      </h3>
    </div>
  );
}

export default ScoreEX;
