import Header from "@/Components/Argon/Headers/Header";
import Create from "@/Components/Custom/Modals/Kontrakan/Create";
import Delete from "@/Components/Custom/Modals/Kontrakan/Delete";
import CustomTable from "@/Components/Custom/Tables/CustomTable";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { Button, CardImg, Col, Container, Media, Row } from "reactstrap";

const headRow = ["No", "Identitas", "Alamat", "Keterangan", "Foto", "Action"];

const KontrakanIndex = (props) => {
    const { auth, kontrakans } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [filtered, setFiltered] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const {get} = useForm();

    const addData = () => {
        setIsOpen(true);
        setFiltered(null);
    };

    const editData = (value) => {
        get(route('kontrakan.edit', value.id));
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const deleteData = (value) => {
        setFiltered(value);
        setDeleteOpen(true);
    }

    const deleteToggle = () => {
        setDeleteOpen(!deleteOpen);
    }

    return (
        <AdminLayout user={auth.user} header="List Kontrakan">
            <Head title="List Kontrakan" />
            <Header>
                <Col lg="6" xl="3"></Col>
            </Header>

            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <CustomTable
                            data={kontrakans}
                            tableHead="List Kontrakan"
                            headData={headRow}
                            isAdd={true}
                            addData={addData}
                        >
                            {kontrakans.map((kontrakan, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td className="">
                                            <div className="d-flex flex-column">
                                                <strong>
                                                    <a
                                                        href={
                                                            "https://wa.me/62" +
                                                            kontrakan.no_wa
                                                        }
                                                        target="_blank"
                                                    >
                                                        {"62" + kontrakan.no_wa}
                                                    </a>
                                                </strong>
                                                <span>{kontrakan.nama}</span>
                                            </div>
                                        </td>
                                        <td>{kontrakan.alamat}</td>
                                        <td>{kontrakan.keterangan}</td>
                                        <td>
                                            <a
                                                href={kontrakan.foto}
                                                target="_blank"
                                            >
                                                <Media>
                                                    <img
                                                        className="img-responsive"
                                                        src={kontrakan.foto}
                                                        width={"150px"}
                                                    />
                                                </Media>
                                            </a>
                                        </td>
                                        <td>
                                            <Button
                                                color="warning"
                                                size="sm"
                                                onClick={() =>
                                                    editData(kontrakan)
                                                }
                                            >
                                                <i class="fa-solid fa-pen-to-square mr-2"></i>
                                                Edit
                                            </Button>
                                            <Button
                                                color="danger"
                                                size="sm"
                                                onClick={() =>
                                                    deleteData(kontrakan)
                                                }
                                            >
                                                <i class="fa-solid fa-trash-can mr-2"></i>
                                                Hapus
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </CustomTable>
                    </div>
                </Row>
            </Container>

            <Create
                isOpen={isOpen}
                toggleModal={toggleModal}
                filteredData={filtered}
            />

            <Delete
                isOpen={deleteOpen}
                toggleModal={deleteToggle}
                deleteData = {filtered}
            />
        </AdminLayout>
    );
};

export default KontrakanIndex;
