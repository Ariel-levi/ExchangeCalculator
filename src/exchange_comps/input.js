import React, { useContext, useRef } from "react";
import { ExchangeContext } from "../context/exchangeContext";

function Input(props) {
  let numRef = useRef();
  let exchangeFromRef = useRef();
  let exchangeToRef = useRef();

  let { ar, setfinalVal, setFromCurrency, fromCurrency, setToCurrency, toCurrency, coins_ar} = useContext(ExchangeContext);

  const onClickBtn = () => {
    let num = numRef.current.value;
    let from = exchangeFromRef.current.value;
    let to = exchangeToRef.current.value;
    let toNum = ar[to];
    if (to == "USD" && from == "USD") {
      setfinalVal(num);
    } else {
      setfinalVal((num*toNum).toFixed(4));
    }
  };

  const checkPrint = (_titel, _from, _to) => {
    console.log("==================== " + _titel)
    console.log("from : " + coins_ar.indexOf(_from) + " , setFrom => " + fromCurrency)
    console.log("to : " + coins_ar.indexOf(_to) + " , setTo => " + toCurrency)
  }
  
  const onChange = () => {
    let from = exchangeFromRef.current.value;
    let to = exchangeToRef.current.value;
    setFromCurrency(from)
    setToCurrency(to);
    checkPrint("onChange", from, to);
  }

  // need to fix
  const onClickSwitch = () => {
    let from = exchangeFromRef.current.value;
    let to = exchangeToRef.current.value;
    let temp = from;
    from = to;
    to = temp;
    setFromCurrency(from)
    setToCurrency(to);
    checkPrint("switch", from, to);
  }
  
  const check = () => {
    let from = exchangeFromRef.current.value;
    let to = exchangeToRef.current.value;
    checkPrint("check", from, to);
  }
  
  return (
    <div className="col-md-6 my-3 d-block">
      <h3>Enter Number:</h3>
      <input
        ref={numRef}
        className="form-control"
        defaultValue={1}
        type="number"
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
      <button onClick={onClickSwitch}>Switch</button>
      <button onClick={check}>check</button>
    </div>
  );
}

export default Input;
