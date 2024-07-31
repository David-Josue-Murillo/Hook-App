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
        const data = await response.json();

        console.log(data);
    }
    
    return {
        
    }
}
