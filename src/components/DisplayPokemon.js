import React, { useState } from 'react';
import Modal from './Modal';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

const DisplayPokemon = () => {

    const [data,  setData] = useState([])
    const [isModalOpen,  setIsModalOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(32)

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

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = data.slice(firstPostIndex, lastPostIndex)


    return (
        <div className='BackDisplayPokemon'>
            <div className='DisplayCard'>
            {openModal()}
                {
                    currentPost.map(pokemon => <div onClick={handleOpenModal}><PokemonCard name= {pokemon.name} img={pokemon.image} /></div>)
                }
            </div>
            <Pagination 
                totalPosts={data.length} 
                postPerPage={postPerPage} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default DisplayPokemon;