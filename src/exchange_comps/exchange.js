import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "./input";
import Score from "./score";
import { ExchangeContext } from "../context/exchangeContext";

function Exchange(props) {
  const [ar, setAr] = useState([]);
  const [finalVal, setfinalVal] = useState(0);
  const [coins_ar, setCoins_ar] = useState(["USD","ILS","EUR","BTC","THB"]);
  const [fromCurrency, setFromCurrency] = useState(coins_ar[0]);
  const [toCurrency, setToCurrency] = useState(coins_ar[1]);

  useEffect(() => {
    doApi(fromCurrency);
  }, [fromCurrency]);

  const doApi = async (_Currency) => {
    let url = `https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b&base_currency=${_Currency}`;
    let resp = await axios.get(url);
    setAr(resp.data.data);
    console.log(resp.data.query.base_currency)
    console.log(resp.data.data)
  };

  return (
    <ExchangeContext.Provider
      value={{
        ar: ar,
        setAr: setAr,
        finalVal: finalVal,
        setfinalVal: setfinalVal,
        fromCurrency:fromCurrency,
        setFromCurrency:setFromCurrency,
        toCurrency:toCurrency,
        setToCurrency:setToCurrency,
        coins_ar:coins_ar
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
