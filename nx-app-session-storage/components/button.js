import { useState, useEffect } from 'react';

const BUTTON_STATE_KEY = 'button-state';

const Button = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (sessionStorage.getItem(BUTTON_STATE_KEY)) {
            setCount(parseInt(sessionStorage.getItem(BUTTON_STATE_KEY)));
        } else {
            sessionStorage.setItem(BUTTON_STATE_KEY, count.toString());
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem(BUTTON_STATE_KEY, count.toString());
    }, [count]);

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
};

export default Button;