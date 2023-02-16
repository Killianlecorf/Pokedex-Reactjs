import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const DisplayPokemon = () => {

    const [data,  setData] = useState([])

    const fetchApi = async () => {
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon')
        const data = await response.json();
        // console.log(data)
        setData(data) 
    }
    
    fetchApi()


    return (
        <div className='BackDisplayPokemon'>
            <div className='DisplayCard'>
                {
                    data.map(pokemon =>
                        <PokemonCard key={pokemon.id} name={pokemon.name} /> 
                    )
                }
            </div>
        </div>
    );
};

export default DisplayPokemon;