import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input type="text" className="mt-2 form-control" placeholder="Ingrese su nombre" />
            <input type="text" className="mt-2 form-control" placeholder="Ingrese su nombre" />
            <input ref={inputRef} type="text" className="mt-2 form-control" placeholder="Ingrese su nombre" />
            <input type="text" className="mt-2 form-control" placeholder="Ingrese su nombre" />

            <button onClick={onClick} className="btn btn-primary mt-2">Focus</button>
        </>
    )
}
