import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardFooter, CardHeader, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Media, PaginationItem, PaginationLink, Row, Table } from 'reactstrap'
import ModalJenis from '../Modals/ModalJenis';
import { NumericFormat } from 'react-number-format';
import { Link, useForm } from '@inertiajs/react';
import Pagination from '../Pagination/Pagination';
import ModalDelete from '../Modals/ModalDelete';

const CustomTable = (props) => {

    const {tableHead, data, headData,children, toggleModal, addData, isAdd} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [filtered, setFiltered] = useState();
    const [searchData, setSearchData] = useState();
    const [rowPerPage, setRowPerPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const {get} = useForm();

    // useEffect(() => {

    //     get(route(route().current(),
    //     {
    //         page:currentPage,
    //         searchPaket: searchData ? searchData : '',
    //         rowPerPage: rowPerPage,
    //     }),
    //     {
    //         preserveState:true,
    //         preserveScroll:true,
    //         replace:true,
    //         only:['pakets']
    //     })
    // }, [searchData, rowPerPage, currentPage])

    const editData = (value) => {
       setFiltered(value);
       setIsOpen(true);
    };

    const deleteData = (value) => {
        setFiltered(value);
        setDeleteOpen(true);
    }

    const deleteToggle = () => {
        setDeleteOpen(deleteOpen != deleteOpen);
    }

    const pageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const previousPage = () => {
        if(currentPage != 1){
            setCurrentPage(currentPage -1);
        }
    }

    const nextPage = () => {
        if(currentPage !== Math.ceil(data.total / rowPerPage)){
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <>
            <Card>
                <CardHeader className='d-flex flex-column justify-content-between' >
                    <h3 className='mb-0'>{tableHead}</h3>
                    <div className="mt-3 justify-content-between align-items-center">
                        <Row>
                            <Col className='order-xs-2' xs="12" lg="6">
                                <select
                                    value={rowPerPage}
                                    onChange={(e) => setRowPerPage(e.target.value)}
                                    className='form-control-alternative form-control form-select-sm mr-3 w-25'
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                </select>
                            </Col>
                            <Col className='order-xs-1' xs="12" lg="3">
                                <Form className='justify-content-between '>

                                    <InputGroup className='input-group-alternative'>
                                        <Input
                                            id='search'
                                            name='search'
                                            type='text'
                                            value={searchData ? searchData : ''}
                                            onChange={(e)=>setSearchData(e.target.value)}
                                            placeholder='Cari disini'
                                        />
                                        <Button
                                            className='shadow-none border-none text-muted bg-transparent'
                                            onClick={(e) => e.preventDefault()}
                                        >

                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </Col>
                            { isAdd == true && (

                                <Col className='order-xs-3 justify-content-end d-flex' xs="12" lg="3">
                                <Button
                                    color='primary'
                                    size="md"
                                    onClick={addData}
                                    >
                                    <i className="fa-solid fa-file-circle-plus mr-2"></i>
                                    Tambah Data
                                </Button>
                            </Col>
                            )}
                        </Row>


                    </div>



                </CardHeader>
                <Table className='align-items-center  table-flush '  responsive>
                    <thead className='thead-light'>
                        <tr>
                            {headData.map((th, index) => {
                                return (
                                    <th scope='col' key={index}>
                                        {th}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </Table>
                <CardFooter className='py-4'>

                    <nav aria-label='....'>
                        <Pagination
                            currentPage={currentPage}
                            rowPerPage={data.per_page}
                            totalPosts={data.total}
                            onPageChange={pageChange}
                            previousPage={previousPage}
                            nextPage={nextPage}
                            lastPage={data.last_page}
                        />
                    </nav>
                </CardFooter>
            </Card>

        </>
    )
}

CustomTable.propTypes = {
    tableHead: PropTypes.string.isRequired,
    data: PropTypes.array,
    headData: PropTypes.array.isRequired,
    toggleModal: PropTypes.func,
    addData: PropTypes.func,
    isAdd: PropTypes.bool,
}

export default CustomTable
