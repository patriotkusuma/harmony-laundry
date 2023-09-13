import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import { Col, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, Row, UncontrolledCollapse } from 'reactstrap'

export default function AuthNavbar() {
    const user = usePage().props.auth.user;

  return (
    <>
        <Navbar className='navbar-top navbar-horizontal navbar-dark' expand="md">
            <Container className='px-4'>
                <NavbarBrand tag={Link}>
                    <img
                        alt='...'
                        src='/assets/img/brand/argon-react-white.png'
                    />
                </NavbarBrand>
                <button className='navbar-toggler' id='navbar-collapse-main'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <UncontrolledCollapse navbar toggler='#navbar-collapse-main'>
                    <div className='navbar-collapse-header d-md-none'>
                        <Row>
                            <Col className='collapse-brand' xs="6">
                                <Link href='/'>
                                    <img
                                        alt='...'
                                        src='/assets/img/brand/argon-react.png'
                                    />
                                </Link>
                            </Col>
                            <Col className='collapse-close' xs='6'>
                                <button className='navbar-toggler' id='navbar-collapse-main'>
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className='ml-auto' navbar>


                        {user ? (

                            <>
                                <NavItem>
                                    <NavLink className='nav-link-icon' href={route('dashboard')} tag={Link}>
                                        <i className='ni ni-planet'/>
                                        <span className="nav-link-inner--text">Dashboard</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href='/admin/user-profile'
                                        tag={Link}
                                        className="nav-link-icon">
                                            <i className="ni ni-single-02"></i>
                                            <span className="nav-link-inner--text">Profile</span>
                                    </NavLink>
                                </NavItem>
                            </>

                        ) :
                        (
                            <>
                                <NavItem>
                                    <NavLink className='nav-link-icon' href={route('register')} tag={Link}>
                                        <i className='ni ni-circle-08'/>
                                        <span className="nav-link-inner--text">Register</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href={route('login')}
                                        tag={Link}
                                        className="nav-link-icon">
                                            <i className="ni ni-key-25"></i>
                                            <span className="nav-link-inner--text">Login</span>
                                    </NavLink>
                                </NavItem>
                            </>

                        )
                        }
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    </>
  )
}
