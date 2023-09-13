import Header from '@/Components/Argon/Headers/Header';
import Delete from '@/Components/Custom/Modals/DanaKeluar/Delete';
import Tambah from '@/Components/Custom/Modals/DanaKeluar/Tambah';
import CustomTable from '@/Components/Custom/Tables/CustomTable';
import DanaKeluarTable from '@/Components/Custom/Tables/DanaKeluarTable';
import AdminLayout from '@/Layouts/AdminLayout'
import moment from 'moment';
import React, { useState } from 'react'
import { Button, Container, Row } from 'reactstrap';

const headRow = ['No','Keperluan','Jumlah Keluar','Tanggal Keluar', 'Keterangan', 'Action'];

const DanaKeluar = (props) => {
    const {auth, danaKeluars, totalDanaKeluar} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [filtered, setFiltered] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

    const addData = () => {
        setIsOpen(true);
        setFiltered(null);
    }
    const toggleModal = () =>{
        setIsOpen(isOpen != isOpen);
    }

    const editData = (value) => {
        setFiltered(value);
        setIsOpen(true);
    }

    const deleteData = (value) => {
        setFiltered(value);
        setDeleteOpen(true);
    }

    const deleteToggle = () => {
        setDeleteOpen(deleteOpen != deleteOpen);
    }

  return (
    <AdminLayout
        user={auth.user}
        header="Dana Keluar"
    >
        <Header totalPengeluaran={addCommas(removeNonNumeric(totalDanaKeluar))}/>
        {/* <header className="bg-gradient-info pb-8 pt-5 pt-md-8"> */}
            <Container className='mt--7' fluid>

                <Row>
                    <div className="col">
                        <CustomTable
                            data={danaKeluars}
                            tableHead='Dana Keluar'
                            headData={headRow}
                            toggleModal={toggleModal}
                            addData={addData}
                        >
                            {danaKeluars.map((danaKeluar, index) => {
                                return (
                                    <tr>
                                        <th scope='row'>
                                            {index + 1}
                                            {/* {(((data.current_page - 2) * data.per_page) + index + data.per_page + 1)} */}
                                        </th>
                                        <td>
                                            <span className="mb-0 text-sm">{danaKeluar.keperluan}</span>
                                        </td>
                                        <td>
                                            <span className="mb-0 text-sm">{'Rp ' + addCommas(removeNonNumeric(danaKeluar.jumlah_keluar))}</span>
                                        </td>
                                        <td>
                                            <span className="mb-0 text-sm">{moment(danaKeluar.tanggal_keluar).format('DD MMMM YYYY')}</span>
                                        </td>
                                        <td>
                                            <span className="mb-0 text-sm">{danaKeluar.keterangan}</span>
                                        </td>
                                        <td>
                                            <Button
                                                color='warning'
                                                size='sm'
                                                onClick={() => editData(danaKeluar)}
                                            >
                                                <i class="fa-solid fa-pen-to-square mr-2"></i>
                                                Edit
                                            </Button>
                                            <Button
                                                color='danger'
                                                size='sm'
                                                onClick={() => deleteData(danaKeluar)}
                                            >
                                                <i class="fa-solid fa-trash-can mr-2"></i>
                                                Hapus
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </CustomTable>
                    </div>
                </Row>
            </Container>

            <Tambah
                isOpen={isOpen}
                toggleModal={toggleModal}
                filteredData={filtered}
            />
            <Delete
                isOpen={deleteOpen}
                toggleModal={deleteToggle}
                deleteData={filtered}
            />

        {/* </header> */}
    </AdminLayout>
  )
}

export default DanaKeluar
