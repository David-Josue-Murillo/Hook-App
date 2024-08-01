import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementar = useCallback((value = 1) => {
        setCounter((counter) => counter + value);
    },[]);

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementar} />
        </>
    )
}
