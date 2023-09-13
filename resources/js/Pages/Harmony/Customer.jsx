import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import { Container, Row } from 'reactstrap';

const Customer = (props) => {
    const {auth, customers, flash} = props;

    return (
        <AdminLayout
            header="Customer"
            user={auth.user}
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

export default Customer
