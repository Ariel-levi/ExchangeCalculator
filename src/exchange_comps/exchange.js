import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "./input";
import Score from "./score";
import { ExchangeContext } from "../context/exchangeContext";

function Exchange(props) {
  const [ar, setAr] = useState([]);
  const [finalVal, setfinalVal] = useState(0);
  const [nameAr, setNameAr] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");

  useEffect(() => {
    doApi(fromCurrency);
  }, [fromCurrency]);

  const doApi = async (_Currency) => {
    // let url = `http://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb`;
    // let resp = await axios.get(url);
    // let array = Object.values(resp.data.quotes);
    // setAr(array);
    let url = `https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b&base_currency=${_Currency}`;
    let resp = await axios.get(url);
    let array = Object.values(resp.data.data);
    let nameAr = Object.keys(resp.data.data).sort();
    // console.log(nameAr);
    // console.log(resp.data);
    setAr(array);
    setNameAr(nameAr);
  };

  const exchangeCoins = (_num, _from, _to) => {
    let curentVal = _num * _to;
    console.log(curentVal);
    // let finalVal = curentVal / _from;
    // console.log(finalVal);
    // setfinalVal(finalVal.toFixed(4));
  };

  return (
    <ExchangeContext.Provider
      value={{
        ar: ar,
        setAr: setAr,
        exchangeCoins: exchangeCoins,
        finalVal: finalVal,
        setfinalVal: setfinalVal,
        nameAr: nameAr,
        setFromCurrency:setFromCurrency
      }}
    >
      <div className="container">
        <Input />
        <Score />
      </div>
    </ExchangeContext.Provider>
  );
}

export default Exchange;
