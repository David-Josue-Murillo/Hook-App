import { useFetch } from "../hooks"

export const MultipleCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/3');

    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />

            { isLoading && <p>Cargando...</p> }

            <h2>{data?.name}</h2>

            { hasError && <p>Ha ocurrido un error</p> }
        </>
    )
}
