import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {

    let pages = [];

    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className="previous-pagination">
                <button className='pagination-number' onClick={() => setCurrentPage(currentPage + 1)}> <FiArrowLeft /></button>
            </div>
            {pages.map((page, index) => {
                return <button className='pagination-number' key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
            <div className="previous-pagination">
                <button className='pagination-number' onClick={() => setCurrentPage(currentPage - 1)}> <FiArrowRight /></button>
            </div>
        </div>
    );
};

export default Pagination;