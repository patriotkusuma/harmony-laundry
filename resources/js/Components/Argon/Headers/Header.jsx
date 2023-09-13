import React from 'react'
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap'

const Header = ({totalPengeluaran}) => {
  return (
    <>
        <div className='header bg-gradient-info pb-8 pt-5 pt-md-7'>
            <Container fluid>
                <div className='header-body'>
                    {/* Card Stats */}
                    <Row>
                        <Col lg="6" xl="3">
                            <Card className='card-stats mb-4 mb-xl-0'>
                                <CardBody>
                                    <Row>
                                        <div className='col'>
                                            <CardTitle
                                                tag="h5"
                                                className='text-uppercase text-muted mb-0'
                                            >
                                                Total Pengeluaran
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">
                                                {totalPengeluaran}
                                            </span>
                                        </div>
                                        <Col className='col-auto'>
                                            <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                                                <i className="fas fa-chart-bar" />

                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Header
