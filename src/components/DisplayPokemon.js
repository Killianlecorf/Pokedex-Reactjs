import React, { useState } from 'react';
import Modal from './Modal';
import PokemonCard from './PokemonCard';

const DisplayPokemon = () => {

    const [data,  setData] = useState([])
    const [isModalOpen,  setIsModalOpen] = useState(false)

    const fetchApi = async () => {
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon')
        const data = await response.json();
        setData(data) 
    }
    
    fetchApi()

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const openModal = () => {
        if (isModalOpen === true) {

            return <Modal setIsModalOpen={setIsModalOpen}/>
        }
    }

    return (
        <div className='BackDisplayPokemon'>
            <div className='DisplayCard'>
            {openModal()}
                {
                    data.map(pokemon => <div onClick={handleOpenModal}><PokemonCard name= {pokemon.name} img={pokemon.image} /></div>)
                }
            </div>
        </div>
    );
};

export default DisplayPokemon;