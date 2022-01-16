import React, { useContext, useRef } from "react";
import { ExchangeContext } from "../context/exchangeContext";

function Input(props) {
  let numRef = useRef();
  // let exchangeFromRef = useRef();
  let exchangeToRef = useRef();

  let { ar, exchangeCoins, nameAr } = useContext(ExchangeContext);

  const onClickBtn = () => {
    let num = numRef.current.value;
    let from = exchangeFromRef.current.value;
    let to = exchangeToRef.current.value;
    exchangeCoins(num, from, to);
  };

  const onChange = () => {
    setFromCurrency()
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
        {ar.map((item, i) => {
          return (
            <option key={i} value={item}>
              {nameAr[i]}
            </option>
          );
        })}
      </select>

      <h2>Exchange To</h2>
      <select ref={exchangeToRef} className="my-3 form-control">
        {ar.map((item, i) => {
          return (
            <option key={i} value={item}>
              {nameAr[i]}
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
