import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const DisplayPokemon = ({pokemon}) => {

    const [data,  setData] = useState([])

    const fetchApi = async () => {
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon')
        const data = await response.json();
        setData(data) 
    }
    
    fetchApi()

    return (
        <div className='BackDisplayPokemon'>
            <div className='DisplayCard'>
                {
                    data.map(pokemon =>
                        <PokemonCard key={pokemon.id} name={pokemon.name} img={pokemon.image} id={pokemon.id} /> 
                    )
                }
            </div>
        </div>
    );
};

export default DisplayPokemon;