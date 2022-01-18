import React ,{useContext }from 'react';
import { arcontext } from '../context/arcontext';


function ScoreEX(props){
    let {ar,setAr}  = useContext(arcontext)
    // let first =ar[0].first.substr(3, 6);
    let first =ar[0].first;
    let upper= first.toLowerCase();
    // let end =ar[0].end.substr(3, 6);
    let end =ar[0].end;
    let lower = end.toLowerCase();
    let elseupper=""
    let elselower=""
    if(upper == "thb"){elseupper="THB"}else if(upper == "cad"){elseupper="CAD"} else{elseupper=""}
    if(lower == "thb"){elselower="THB"}else if(lower == "cad"){elselower="CAD"} else{elselower=""}

   
    return(
        <div className='col-md-6 mx-auto shadow text-center score '>
           <h2>{ar[0].amount}  {elseupper}<i className={"fa fa-"+upper} aria-hidden="true"></i> = {ar[0].total.toFixed(2)}  {elselower}<i className={"fa fa-"+lower} aria-hidden="true"></i></h2> 
           <br/>
           <h3>on the date: <span style={{color:"red"}}>{new Date().toLocaleString() + ""}</span></h3>
        </div> 
    )
}

export default ScoreEX