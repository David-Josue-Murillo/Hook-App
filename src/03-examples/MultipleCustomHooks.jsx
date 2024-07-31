import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />

            { isLoading && <LoadingMessage /> }

            <h2>{data?.name}</h2>

            <button 
                onClick={() => counter > 1 ? decrement() : null}
                className="btn btn-primary mt-2"
            >Anterior</button>
            <button 
                onClick={() => increment()}
                className="btn btn-primary mt-2"
            >Siguiente</button>

            { hasError && <p>Ha ocurrido un error</p> }
        </>
    )
}
