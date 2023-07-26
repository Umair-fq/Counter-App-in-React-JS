import { BsPlusLg } from "react-icons/bs";
import {AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import {imgSrc} from "./image/img.jpg"

const Counter = () => {
    let [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(++counter)
    }

    const decrementCounter = () => {
        setCounter(--counter)
    }

    return ( 
        <>
            <h1 style={{textAlign: "center", color:"#3498db"}}>Increment Decrement Counter App</h1>
            <div className="btnContainer">
                <button className="incrementBtn" onClick={incrementCounter}><BsPlusLg/></button>
                <button className="decrementBtn" onClick={decrementCounter}><AiOutlineMinus /></button>
            </div>
            <h1 style={{textAlign: "center", color: "#9b59b6"}}>{counter}</h1>
        </>
     );
}
 
export default Counter;