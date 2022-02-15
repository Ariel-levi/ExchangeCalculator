import React, { useContext, useEffect, useRef } from "react";
import { arcontext } from "../context/arcontext";
import axios from "axios";

function InputEX(props) {
  let { setAr } = useContext(arcontext);

  let fromRef = useRef();
  let toRef = useRef();
  let amountRef = useRef();

  useEffect(() => {
    doApi();
  },[])

  const onClickSwitch = () => {
    let temp = fromRef.current.value;
    fromRef.current.value = toRef.current.value;
    toRef.current.value = temp;
    doApi();
  };

  const calcTotal = () => {
    doApi();
  };

  const doApi = async () => {
    let fromVal = fromRef.current.value;
    let toVal = toRef.current.value;
    let url = `https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b`;
    let resp = await axios.get(url);
    // console.log(resp.data.data);
    let amountVal = amountRef.current.value;
    let from = 1;
    if (fromVal != "USD") {
      from = resp.data.data[fromVal];
    }
    let to = 1;
    if (toVal != "USD") {
      to = resp.data.data[toVal];
    }

    let TotalVal = (1 / from) * to * amountVal;

    let changeObj = {
      total: TotalVal,
      amount: amountVal,
      from: fromVal,
      to: toVal,
    };
    setAr([changeObj]);
  };

  return (
    <div>
      <h3>Enter amount:</h3>
      <input
        onInput={calcTotal}
        ref={amountRef}
        type="number"
        defaultValue="100"
        className="form-control"
      />
      <h3 className="mt-3">Choose coin</h3>
      <h4>From:</h4>
      <select
        onChange={calcTotal}
        ref={fromRef}
        className="form-control mb-3"
        >
        <option value="USD">USD U.S. Dollar</option>
        <option value="ILS">ILS New Shekel</option>
        <option value="EUR">EURO</option>
        <option value="BTC">BTC Bitcoin</option>
        <option value="CAD">CAD Canadian Dollar</option>
        <option value="GBP">GBP Pound</option>
        <option value="THB">THB Thai Butt</option>
      </select>
      <h4>To:</h4>
      <select
        onChange={calcTotal}
        ref={toRef}
        className="form-control"
      >
        <option value="ILS">ILS New Shekel</option>
        <option value="USD">USD U.S. Dollar</option>
        <option value="EUR">EURO</option>
        <option value="BTC">BTC Bitcoin</option>
        <option value="CAD">CAD Canadian Dollar</option>
        <option value="GBP">GBP Pound</option>
        <option value="THB">THB Thai Butt</option>
      </select>
      <div className="d-flex justify-content-center">
        <div className="img_switch mt-3 " onClick={onClickSwitch}></div>
      </div>
    </div>
  );
}

export default InputEX;
