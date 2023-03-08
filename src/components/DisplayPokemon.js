import React, { useState } from 'react';
import Modal from './Modal';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';
import logoPokemon from '../assets/img/logo.png'

const DisplayPokemon = () => {

    const [data,  setData] = useState([])
    const [modalOpen,  setModalOpen] = useState({
        isOpen: false,
        pokemon: null
    })
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(32)
    const [searchTerm, setSearchTerm] = useState("")

    const fetchApi = async () => {
        const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon')
        const data = await response.json();
        setData(data) 
    }
    
    fetchApi()

    const handleOpenModal = () => {
        setModalOpen({...modalOpen , isOpen : true})
    }

    const openModal = () => {
        if (modalOpen.isOpen === true) {

            return <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
        }
    }

    const pageNumber = data.length / postPerPage

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = data.slice(firstPostIndex, lastPostIndex)

    const handleSearchTerm = (event) => {
        let value = event.target.value;
        setSearchTerm(value)
    }

    return (
        <div className='BackDisplayPokemon'>
            <div className="logo-content">
                <img className='logo-pokemon' src={logoPokemon} alt='pokemon-logo'/>
            </div>
            <h2 className='title-pokemon'>Pokemon React</h2>
            <input 
            type="text" 
            className='search-bar'
            name='searchBar'
            placeholder='Recherche'
            onChange={handleSearchTerm}
            />
            <div className='DisplayCard'>
            {openModal()}
                {
                    currentPost.filter((val) => {
                        return val.name.includes(searchTerm)
                    } )
                    .map(val => <div onClick={handleOpenModal}><PokemonCard name= {val.name} img={val.image} /></div>)
                }
            </div>
            <Pagination 
                totalPosts={data.length} 
                postPerPage={postPerPage} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageNumber={Math.ceil(pageNumber)}
            />
        </div>
    );
};

export default DisplayPokemon;