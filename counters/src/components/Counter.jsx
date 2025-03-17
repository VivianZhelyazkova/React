import { useState } from "react";
export default function Counter() {
    const [counter, setCounter] = useState(0);
    const increaseCounterHandler = () => {
        setCounter((prevState) => prevState + 1);
    };

    return (
        <>
            <h1>Counter</h1>
            <div>{counter}</div>
            <button onClick={increaseCounterHandler}>Increase</button>
            <hr />
        </>
    );
}
