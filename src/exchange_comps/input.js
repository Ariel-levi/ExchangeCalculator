import React, { useContext, useRef } from "react";
import { ExchangeContext } from "../context/exchangeContext";

function Input(props) {
  let numRef = useRef();
  let exchangeFromRef = useRef();
  let exchangeToRef = useRef();

  let { ar, setfinalVal, setFromCurrency } = useContext(ExchangeContext);
  let coins_ar = ["USD","ILS","EUR","BTC","THB"];

  const onClickBtn = () => {
    let num = numRef.current.value;
    let to = exchangeToRef.current.value;
    let toNum = ar[to];
    // console.log("Score :: "+num*toNum);
    setfinalVal((num*toNum).toFixed(4))
  };
  
  const onChange = () => {
    let from = exchangeFromRef.current.value;
    console.log(from)
    setFromCurrency(from)
  }

  return (
    <div className="col-md-6 my-3 d-block">
      <h3>Enter Number:</h3>
      <input
        ref={numRef}
        className="form-control"
        type="text"
        placeholder="Enter Number..."
      />
      <br />
      <h2>Exchange From</h2>
      <select onChange={onChange} ref={exchangeFromRef} className="my-3 form-control">
          {coins_ar.map((item, i) => {
          return (
              <option key={i} value={item}>
                  {item}
              </option>
          );
          })}
      </select>

      <h2>Exchange To</h2>
      <select ref={exchangeToRef} className="my-3 form-control">
          {coins_ar.map((item, i) => {
          return (
              <option key={i} value={item}>
                  {item}
              </option>
          );
          })}
      </select>
      <br />
      <button onClick={onClickBtn}>Exchange</button>
    </div>
  );
}

export default Input;
