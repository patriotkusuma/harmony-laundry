import Header from '@/Components/Argon/Headers/Header';
import CustomTable from '@/Components/Custom/Tables/CustomTable';
import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react';
import React from 'react'
import { Col, Container, Row } from 'reactstrap';

const headRow = [
    "No",
    "Pesanan",
    "Total Bayar",
    "Status",
    "Keterangan",
    "Action"
];

const Index = (props) => {
    const {auth,pesanans}= props;
  return (
    <AdminLayout
        user={auth.user}
        header="Daftar Pesanan"
    >
        <Head  title='Daftar Pesanan'/>
        <Header>
            <Col lg="6" xl="3">

            </Col>
        </Header>

        <Container className='mt--7' fluid>
            <Row>
                <div className="col">
                    <CustomTable
                        data={pesanans}
                        headData={headRow}
                        tableHead='Dana Keluar'
                    >

                    </CustomTable>
                </div>
            </Row>
        </Container>

    </AdminLayout>
  )
}

export default Index
