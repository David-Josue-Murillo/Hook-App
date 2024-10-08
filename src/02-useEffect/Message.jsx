import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setfCoords] = useState({x: 0, y: 0})

    const onMouseMove = ({x, y}) => {
        setfCoords({x , y});
    } 

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        
        return () => {
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, []);
    

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
