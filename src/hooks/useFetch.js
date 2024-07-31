import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();

    }, [url])

    const setLoadiingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }
    
    const getFetch = async () => {
        setLoadiingState();
        
        const response = await fetch(url);

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
