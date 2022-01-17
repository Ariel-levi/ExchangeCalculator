import React, { useContext } from 'react';
import { ExchangeContext } from "../context/exchangeContext";

function InputItem(props){
    let { ar } = useContext(ExchangeContext);
    let coins_ar = ["USD","ILS","EUR","BTC","THB"];
    return(
        <React.Fragment>
            <h2>{props.h2}</h2>
            <select className="my-3 form-control">
                {coins_ar.map((item, i) => {
                return (
                    <option key={i} value={item}>
                        {item}
                    </option>
                );
                })}
            </select>
        </React.Fragment>
    )
}
export default InputItem
