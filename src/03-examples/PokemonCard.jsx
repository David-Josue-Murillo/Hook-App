import React from 'react'

export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section styel={{height: 200}} className='card'>
        <h2 className='text-capitalize'>#{id} - {name}</h2>
        <div>
            {
                sprites.map(sprite => (
                    <img key={sprite} src={sprite} alt={name} className='img-fluid'/>
                ))
            }
        </div>
    </section>
  )
}
