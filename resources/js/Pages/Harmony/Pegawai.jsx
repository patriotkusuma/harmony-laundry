import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import { Alert, Container, Row } from 'reactstrap';

const Pegawai = (props) => {
    const {auth, pegawais} = props;
  return (
    <AdminLayout
        user={auth.user}
        header="Pegawai"
    >
        <header className="bg-gradient-info pb-8 pt-5 pt-md-8">
            <Container fluid>

                <Row>
                    <div className="col">

                    </div>
                </Row>
            </Container>
        </header>

    </AdminLayout>
    )
}

export default Pegawai
