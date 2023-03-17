import React, { useState, useCallback } from 'react';

// Parent component
export default function UseCallback() {
    const [count, setCount] = useState(0)
    console.log(count)
    return (
        <>
            <button onClick={() => { setCount(count + 1) }} >Increase</button> &nbsp; &nbsp;
            <button onClick={() => { setCount(0) }} >Reset</button>
            <Content id={count} />
        </>
    )
}

// Child component
function Content({ id }) {

    console.log("Re-render")

    // const handleClick = () => {
    //     console.log("Click!!")
    // }

    const handleClick = useCallback(() => {
        console.log('Click')
    }, [id])
    return (
        <>
            <h1>UseCallsback Hook:: {id}</h1>
            <button onClick={handleClick} >Test</button>
        </>
    )
}