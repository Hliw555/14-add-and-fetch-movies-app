import React, { useState, useMemo } from 'react';

// Parent Component
function UseMemo() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Use Memo Hook</h1>
            <button onClick={() => { setCount((preCount) => preCount + 1) }}>Increase</button> &nbsp; &nbsp;
            <button onClick={() => { setCount(count - 1) }} >Reset</button>
            {/* <Content a={1} b={count} /> */}
            <h2 style={{ color: 'green' }} >State Variable in parent: <span style={{ color: 'pink', backgroundColor: '#444', padding: '2px 6px' }} >{count}</span> </h2>
            <Content a={1} b={count} />
        </>
    )
}

export default UseMemo;


// Child Component
function Content({ a, b }) {
    const random = Math.round(Math.random() * 10);

    // useMemo, ragular variable
    const randomFromUsememo = useMemo(() => {
        return Math.round(Math.random() * 10);
    }, [a, b])


    return (
        <div>
            <h2>A: <span style={{ color: 'red' }}>{a}</span>  </h2>
            <h2>Random: <span style={{ color: 'red' }}>{random}</span> </h2>
            <h2>Random From useMemo: <span style={{ color: 'red' }}>{randomFromUsememo}</span> </h2>
            {/* <h2>State Variable: <span style={{ color: 'green' }}>{b}</span> </h2> */}
        </div>
    )
};