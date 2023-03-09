import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage, pageNumber}) => {

    let pages = [];

    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    const previousPagination = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)   
        }
    }

    const nextPagination = () =>{
        if (currentPage !== pageNumber) {
            setCurrentPage(currentPage + 1)      
        }
    }


    return (
        <div className='pagination-content'>
            <div className="previous-pagination">
                <button className='pagination-number-left' onClick={previousPagination}> <FiArrowLeft /></button>
            </div>
            {pages.map((page, index) => {
                return <button className={page+1 === currentPage ? 'pagination-number-active' : 'pagination-number'} key={index} onClick={() => setCurrentPage(page+1)}>{page+1}</button>
            })}
            <div className="previous-pagination">
                <button className='pagination-number-right' onClick={nextPagination}> <FiArrowRight /></button>
            </div>
        </div>
    );
};

export default Pagination;