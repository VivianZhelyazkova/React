import { useState } from "react";

export default function Calculator() {
    const [result,setResult] = useState("")

    function clickHandler(e){
        const value = e.target.innerText;
        setResult((prevState) => prevState + value)
        
    }

    function generateButtons(){
        const buttonsElements = []

        for (let index = 0; index < 10; index++) {
            const button = <button onClick={clickHandler}>{index}</button>
            buttonsElements.push(button);
        }
        return buttonsElements
    }

    function calculate (){
        setResult((prevRes) => eval(prevRes))
    }

    function clear (){
        setResult("")
    }

    return (
    <>
    <h1>Calculator</h1>
    <div>{result}</div>
    {generateButtons()}
    <button onClick={clickHandler}>+</button>
    <button onClick={clickHandler}>-</button>
    <button onClick={clickHandler}>*</button>
    <button onClick={clickHandler}>/</button>
    <button onClick={calculate}>=</button>
    <button onClick={clear}>AC</button>
    </>
    )
}
