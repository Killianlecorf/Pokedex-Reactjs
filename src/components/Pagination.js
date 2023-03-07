import React from 'react';

const Pagination = ({totalPosts, postPerPage, setCurrentPage}) => {

    let pages = [];

    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((page, index) => {
                return <button className='pagination-number' key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
        </div>
    );
};

export default Pagination;