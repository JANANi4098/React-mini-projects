import { useState } from "react";
import "./adviceapp.css";
import { useEffect } from "react";
export const Adviceapp=()=>{
    const [advice,setAdvice]=useState("Please click the button for advice");
    const [count,setcount]=useState(0);

    async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    const data=await res.json();
    setAdvice(data.slip.advice);
    setcount((c)=>c+1);
    }
    // useEffect(function(){getAdvice();},[])

    return(<><h3>{advice}</h3>
    <button onClick={getAdvice}>Get advice</button>
   <Counter count={count}/></>);
}
function Counter(props){
    return( <p>You have read {props.count} advices</p>)
}
