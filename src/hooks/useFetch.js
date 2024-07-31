import {useState, useEffect} from 'react';

export const useFetch = () => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();

    }, [])
    
    const getFetch = async () => {

        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

        if(!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            })
            return;
        }

        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        // Manejo del cache
    }
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
