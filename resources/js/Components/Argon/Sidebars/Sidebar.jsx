import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Button,
    Col,
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    Input,
    InputGroup,
    InputGroupText,
    Media,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Row,
    UncontrolledCollapse,
    UncontrolledDropdown,
} from "reactstrap";
import { Link, usePage } from "@inertiajs/react";

const Sidebar = (props) => {
    const [collapseOpen, setCollapseOpen] = useState();
    const { bgColor, logo } = props;
    const { auth } = usePage().props;

    const toggleCollapse = () => {
        setCollapseOpen((data) => !data);
    };

    return (
        <Navbar
            className="navbar-vertical fixed-left navbar-light bg-white"
            expand="md"
            id="sidenav-main"
        >
            <Container fluid>
                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Brand */}
                {logo && (
                    <NavbarBrand className="pt-0">
                        <img
                            alt={logo.imgAlt}
                            className="navbar-brand-img"
                            src={logo.imgSrc}
                        />
                    </NavbarBrand>
                )}
                {/* User */}
                <Nav className="align-items-center d-md-none">
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav className="nav-link-icon">
                            <i className="ni ni-bell-55"></i>
                        </DropdownToggle>
                        <DropdownMenu
                            aria-labelledby="navbar-default_dropdown_1"
                            className="dropdown-menu-arrow"
                            right
                        >
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem devider />
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                            <Media className="align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img
                                        alt="..."
                                        src="/assets/img/theme/team-1-800x800.jpg"
                                    />
                                </span>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                                className="noti-title"
                                header
                                tag="div"
                            >
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile">
                                <i className="ni ni-single-02" />
                                <span>My profile</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile">
                                <i className="ni ni-settings-gear-65" />
                                <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile">
                                <i className="ni ni-calendar-grid-58" />
                                <span>Activity</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile">
                                <i className="ni ni-support-16" />
                                <span>Support</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="ni ni-user-run" />
                                <span>Logout</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                {/* Collapse */}
                <Collapse navbar isOpen={collapseOpen}>
                    {/* Collapse header */}
                    <div className="navbar-collapse-header d-md-none">
                        <Row>
                            {logo ? (
                                <Col className="collapse-brand" xs="6">
                                    {logo.innerLink ? (
                                        <Link to={logo.innerLink}>
                                            <img
                                                alt={logo.imgAlt}
                                                src={logo.imgSrc}
                                            />
                                        </Link>
                                    ) : (
                                        <a href={logo.outterLink}>
                                            <img
                                                alt={logo.imgAlt}
                                                src={logo.imgSrc}
                                            />
                                        </a>
                                    )}
                                </Col>
                            ) : null}
                            <Col className="collapse-close" xs="6">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    onClick={toggleCollapse}
                                >
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    {/* Form */}
                    <Form className="mt-4 mb-3 d-md-none">
                        <InputGroup className="input-group-rounded input-group-merge">
                            <Input
                                aria-label="Search"
                                className="form-control-rounded form-control-prepended"
                                placeholder="Search"
                                type="search"
                            />
                            <InputGroupText>
                                <span className="fa fa-search" />
                            </InputGroupText>
                        </InputGroup>
                    </Form>
                    {/* Navigation */}
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                href={route("dashboard")}
                                tag={Link}
                                active={route().current() === "dashboard"}
                                className={
                                    route().current() === "dashboard"
                                        ? "bg-teal text-default"
                                        : ""
                                }
                            >
                                <i className="ni ni-tv-2 text-primary"></i>
                                Dashboard
                            </NavLink>
                        </NavItem>
                        {auth.user.role == "admin" && (
                            <>
                                <NavItem>
                                    <NavLink
                                        href={route("pegawai.index")}
                                        tag={Link}
                                        active={
                                            route().current() ===
                                            "pegawai.index"
                                        }
                                        className={
                                            route().current() ===
                                            "pegawai.index"
                                                ? "bg-teal text-default"
                                                : ""
                                        }
                                    >
                                        <i className="ni ni-tv-2 text-primary"></i>
                                        Pegawai
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        href={route("dana-keluar.index")}
                                        tag={Link}
                                        active={
                                            route().current() ===
                                            "dana-keluar.index"
                                        }
                                        className={
                                            route().current() ===
                                            "dana-keluar.index"
                                                ? "bg-teal text-default"
                                                : ""
                                        }
                                    >
                                        <i className="ni ni-tv-2 text-primary"></i>
                                        Dana Keluar
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        href="#"
                                        id="toggler"
                                        // tag={Button}
                                        tag="a"
                                    >
                                        <i className="ni ni-tv-2 text-primary"></i>

                                        <span>Inventory Management</span>
                                        <i class="fa-solid fa-angle-down"></i>
                                    </NavLink>
                                    <UncontrolledCollapse
                                        toggler="#toggler"
                                        defaultOpen
                                    >
                                        <NavLink
                                            href={route("customers.index")}
                                            tag={Link}
                                            className={
                                                route().current() ===
                                                "customers.index"
                                                    ? "bg-teal text-default"
                                                    : "text-muted"
                                            }
                                        >
                                            <i className="ni ni-tv-2 text-primary"></i>
                                            Customer
                                        </NavLink>
                                    </UncontrolledCollapse>
                                    <UncontrolledCollapse
                                        toggler="#toggler"
                                        defaultOpen
                                    >
                                        <NavLink
                                            href={route(
                                                "belanja-kebutuhan.index"
                                            )}
                                            tag={Link}
                                            className={
                                                route().current() ===
                                                "belanja-kebutuhan.index"
                                                    ? "bg-teal text-default"
                                                    : "text-muted"
                                            }
                                        >
                                            <i className="fa-solid fa-cart-shopping text-primary"></i>
                                            Belanja Kebutuhan
                                        </NavLink>
                                    </UncontrolledCollapse>
                                </NavItem>
                            </>
                        )}
                        <NavItem>
                            <NavLink
                                href={route("jenis-cuci.index")}
                                tag={Link}
                                active={
                                    route().current() === "jenis-cuci.index" &&
                                    true
                                }
                                className={
                                    route().current() === "jenis-cuci.index"
                                        ? "bg-teal text-default"
                                        : ""
                                }
                            >
                                <i class="fa-solid fa-suitcase text-primary "></i>
                                {/* <i className="ni ni-tv-2 text-primary"></i> */}
                                Paket Laundry
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {/* Devider */}
                    <hr className="my-3" />
                    {/* Heading */}
                    <h6 className="navbar-heading text-muted">Documentation</h6>
                    <Nav className="mb-md-3" navbar></Nav>
                    <Nav className="mb-md-3" navbar>
                        <NavItem className="active-pro active">
                            <NavLink href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adr-admin-sidebar">
                                <i className="ni ni-spaceship" />
                                Upgrade to PRO
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

Sidebar.propTypes = {
    logo: PropTypes.shape({
        innerLink: PropTypes.string,
        outterLink: PropTypes.string,
        imgSrc: PropTypes.string.isRequired,
        imgAlt: PropTypes.string.isRequired,
    }),
};

export default Sidebar;
