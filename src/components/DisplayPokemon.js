<<<<<<< Updated upstream
import React, { useState } from 'react';
import Modal from './Modal';
=======
import React, { useEffect, useState } from 'react';
import ModalPokemon from './ModalPokemon';
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const openModal = () => {
        if (isModalOpen === true) {

            return <Modal />
        }
    }

    return (
        <div className='BackDisplayPokemon'>
            <div className='DisplayCard'>
            <button onClick={handleOpenModal}>Open Modal</button>
            {openModal()}
=======
    const handleDisplayModalPokemon = () => {
        return <ModalPokemon name={data.name} />
    }

    const displayPagination = () => {
        for (let index = 0; index < 10; index++) {
            return <PokemonCard key={data[index].id} name={data[index].name} img={data[index].image} /> 
        }
    }
    
    useEffect(() => {
        displayPagination()
    },[])
    
    return (
        <div className='BackDisplayPokemon'>
            <div onClick={handleDisplayModalPokemon} className='DisplayCard'>
>>>>>>> Stashed changes
                {
                    
                }
            </div>
        </div>
    );
};

export default DisplayPokemon;