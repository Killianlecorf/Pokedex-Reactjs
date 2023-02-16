import React from 'react';
import { useParams } from 'react-router';

const PokemonDetail = (pokemon) => {

    const {id} = useParams();
    
    return (    
        <div>
            {id}
            {pokemon.name}
        </div>
    );
};

export default PokemonDetail;