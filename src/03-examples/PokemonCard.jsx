import { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {

    const h2Ref = useRef();
    const [boxSize , setBoxSize] = useState({height: 0, width: 0});

    useLayoutEffect(() => {
      const { height, width } = h2Ref.current.getBoundingClientRect();
      setBoxSize({height, width});
    }, [name])

    return (
        <>
            <section styel={{ height: 200 }} className='card'>
                <h3 ref={h2Ref} className='text-capitalize'>#{id} - {name}</h3>
                <div>
                    {
                        sprites.map(sprite => (
                            <img key={sprite} src={sprite} alt={name} className='img-fluid' />
                        ))
                    }
                </div>
            </section>

            <code>
                {JSON.stringify(boxSize)}
            </code>
        </>
    )
}
