import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label, Modal, Row } from 'reactstrap'
import { useForm, usePage } from '@inertiajs/react'

const ModalJenis = (props) => {
    const {isOpen, filteredData,toggleModal} = props;


    const {data, setData, errors, reset,patch,post, get, processing, recentySuccessfull} = useForm({
        id:  '',
        nama:  '',
        harga:  '',
        tipe:  '',
        keterangan:  '',
    })

    const onChanged = (e) => {
        console.log(e);
    }

    useEffect(()=>{
        if(filteredData != null){
            setData(filteredData);
        }else{
            setData({
                id:  '',
                nama:  '',
                harga:  '',
                tipe:  '',
                keterangan:  '',
            })
        }
    },[filteredData])

    const submit = (e) => {
        // setData('id', filteredData !=null ? filteredData.id : '' );
        // e.preventDefault();
        if(filteredData == null){
            post(route(route().current()),{
                onSuccess: () => toggleModal(),
            })
        }else{
            patch(route('jenis-cuci.update',filteredData, filteredData.id),{
                preserveState:true,
                replace:true,
                preserveScroll:true,
                onSuccess: () => toggleModal(),
            })
        }
    }

    return (
        <Modal
            className='modal-dialog-centered'
            toggle={toggleModal}
            isOpen={isOpen}
        >
            <div className="modal-header">
                <h2  className="modal-title" id="modal-title-default">
                  {filteredData == null ? 'Tambah' : 'Edit'} Data Paket Laundry
                </h2>
                <button
                    aria-label='close'
                    className='close'
                    data-dismiss="modal"
                    type="button"
                    onClick={toggleModal}
                >
                    <span aria-hidden={true}>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </button>
            </div>
            <div className="modal-body">
                <Form role='form' onSubmit={submit}>
                    <FormGroup>
                        <Label
                            className='form-control-label'
                        >
                            Nama Paket
                        </Label>
                        <Input
                            className='form-control-alternative'
                            id='nama'
                            name='nama'
                            placeholder='Nama Paket'
                            type='text'
                            autoFocus
                            required
                            defaultValue={filteredData != null ? filteredData.nama : ''}
                            onChange={(e) => setData('nama', e.target.value)}
                            invalid={errors.nama && true}
                        />
                        <FormFeedback>
                            {errors.nama && errors.nama }
                        </FormFeedback>
                    </FormGroup>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label
                                    className='form-control-label'
                                >
                                    Harga
                                </Label>
                                <InputGroup className='input-group-alternative'>
                                    <InputGroupText>
                                        Rp
                                    </InputGroupText>
                                    <Input
                                        className='form-control-alternative'
                                        id='harga'
                                        name='harga'
                                        placeholder='Harga'
                                        type='number'
                                        min='0'
                                        autoFocus
                                        required
                                        defaultValue={filteredData != null ? filteredData.harga : ''}
                                        onChange={(e) => setData('harga', e.target.value)}
                                        invalid={errors.harga && true}
                                    />
                                </InputGroup>


                                {errors.harga && (
                                    <small style={{color:'#fb6340'}} className='text-sm justify-content-start'>
                                        {errors.harga}
                                    </small>
                                ) }

                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <label
                                    className='form-control-label'
                                    htmlFor="exampleFormControlSelect1">
                                        Tipe
                                </label>
                                <br/>
                                <Input
                                    bsSize="lg"
                                    className="form-control form-control-alternative form-select"
                                    type="select"
                                    id='tipe'
                                    name='tipe'
                                    defaultValue={filteredData != null ? filteredData.tipe : ''}
                                    onChange={(e)=>setData('tipe', e.target.value)}
                                    invalid = {errors.tipe && true}
                                    required
                                >
                                    <option value=''>Pilih Tipe</option>
                                    <option value="per_kilo">Per Kilo</option>
                                    <option value="satuan">Satuan</option>
                                </Input>

                                <FormFeedback>
                                    {errors.tipe && errors.tipe }
                                </FormFeedback>
                            </FormGroup>
                            </Col>
                    </Row>




                    <FormGroup>
                        <Label
                            className='form-control-label'
                        >
                            Keterangan
                        </Label>
                        <Input
                            className='form-control-alternative'
                            id='keterangan'
                            name='keterangan'
                            placeholder='Keterangan'
                            type='textarea'
                            rows="4"
                            autoFocus
                            defaultValue={filteredData != null ? filteredData.keterangan : ''}
                            onChange={(e)=>setData('keterangan', e.target.value)}
                            invalid={errors.keterangan && true}
                        />
                        <FormFeedback>
                            {errors.keterangan && errors.keterangan }
                        </FormFeedback>
                    </FormGroup>
                </Form>
            </div>
            <div className="modal-footer">
                <Button color="primary" type="submit" disabled={processing} onClick={submit}>
                    <i className="fa-regular fa-floppy-disk"></i>
                    <span>
                        Save changes
                    </span>
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={toggleModal}
                >
                  Close
                </Button>
              </div>
        </Modal>
    )
}

ModalJenis.propTypes = {
    isOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
    filteredData: PropTypes.any,
}

export default ModalJenis
