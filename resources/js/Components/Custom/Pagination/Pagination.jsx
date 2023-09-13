import React from 'react'
import PropTypes from 'prop-types'
import { PaginationItem, PaginationLink, Pagination as PaginationRS } from 'reactstrap';

const Pagination = ({currentPage,rowPerPage, totalPosts, onPageChange, previousPage, nextPage, lastPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / rowPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <PaginationRS
            className='pagination justify-content-end mb-0'
            listClassName='justify-content-end mb-0'
        >
            <PaginationItem>
                <PaginationLink
                    onClick={previousPage}
                >
                    <i className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                </PaginationLink>
            </PaginationItem>
            {pageNumbers.map((number, index) => (
                <PaginationItem
                    key={index}
                    className={currentPage == number ? 'active' : ''}
                >
                    <PaginationLink
                        key={number}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem
                className={lastPage == currentPage ? 'disabled' : ''}
            >
                <PaginationLink
                    onClick={nextPage}
                >
                    <i className="fa fa-angle-right" />
                    <span className="sr-only">Previous</span>
                </PaginationLink>
            </PaginationItem>
        </PaginationRS>
    )
}


export default Pagination
