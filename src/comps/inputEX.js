import React, { useContext, useRef ,setState} from 'react';
import { arcontext } from '../context/arcontext';
import axios from "axios";


function InputEX(props) {
    let {ar,setAr}  = useContext(arcontext)

    let firstValueRef = useRef();
    let endlValueRef = useRef();
    let amountRef = useRef();
 


    const switchClick = () => { 
        let temp = firstValueRef.current.value;
        firstValueRef.current.value = endlValueRef.current.value;
        endlValueRef.current.value = temp;
        doApi();
    }

    const calcTotal = () => {
        doApi();
    }
    const doApi = async () => {
        let first_val =firstValueRef.current.value; 
        let end_val = endlValueRef.current.value; 
        let url = `https://freecurrencyapi.net/api/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b`;
        let resp = await axios.get(url);
        console.log(resp.data.data);
        let amount_val = amountRef.current.value;
        let first = 1 ;
        if(first_val!="USD"){
          first = resp.data.data[first_val];   
        }
        let end = 1 ;
        if(end_val != "USD"){
          end = resp.data.data[end_val];   
        }
    //    console.log(first_val)
    //    console.log(first)
    //    console.log(end_val)
    //    console.log(end)
    //    console.log(amount_val)

        let TotalVal=(1/first)*(end)*amount_val;      

        let changeObj = {
                total:TotalVal,
                amount:amount_val,
                first: first_val,
                end: end_val,
            }
            setAr([changeObj])   
    }

    return (
        <div className='col-md-6 mx-auto shadow input'>
            <div className='text-center'>
              <h1>Conversion calculator</h1>
              <hr/>
            </div>
            <h3>Choose coin</h3>
            <select id='idfirst' onChange={calcTotal} ref={firstValueRef} className='form-control select1'>
                <option value="USD">USD U.S. Dollar</option>
                <option value="ILS">ILS New Shekel</option>
                <option value="EUR">EURO</option>
                <option value="BTC">BTC Bitcoin</option>
                <option value="CAD">CAD Canadian Dollar</option>
                <option value="GBP">GBP Pound</option>
                <option value="THB">THB Thai Butt</option>
            </select>
            <button className="a" onClick={switchClick}></button>
            <select onChange={calcTotal} ref={endlValueRef} className='form-control select2'>
               <option value="USD">USD U.S. Dollar</option>
                <option value="ILS">ILS New Shekel</option>
                <option value="EUR">EURO</option>
                <option value="BTC">BTC Bitcoin</option>
                <option value="CAD">CAD Canadian Dollar</option>
                <option value="GBP">GBP Pound</option>
                <option value="THB">THB Thai Butt</option>
            </select>
            <h3>Enter amount:</h3>
            <input onInput={calcTotal} ref={amountRef} type="number" defaultValue="100" className='form-control' />
        </div>
        
    )
}

export default InputEX