import React from 'react'
import Table from 'react-bootstrap/esm/Table';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Alert } from '@mui/material';
import { useQuery } from 'react-query';
import { API } from '../../config/api';

const TableListProduct = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Navigate = useNavigate();

  const handleAdd = () => {
    Navigate("/add-product")
  }

  const handleEdit = () => {
    Navigate("/update-product")
  }

  let {data : cards } = useQuery('productData', async () => {
    const response = await API.get('/products')
    return response.data.data;
})

  const list = [
    {
      name : "dumbmerch"
    }
  ]


  return (
    <div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="tittle">
            <h4 style={{color : 'black'}}>Delete Data</h4>
          </div>
          
          <div className="body" style={{marginTop : "20px"}}>
            <h6>Are You Sure Want To Delete This Data</h6>
          </div>
          
          <div className="button" style={{display : "flex", marginTop : "30px", justifyContent : "flex-end"}}>
            <div className="btn1">
              <Button variant="success">
                Yes
              </Button>
            </div>
            
            <div className="btn2" style={{marginLeft : '10px'}}>
              <Button variant="danger" onClick={handleClose}>No</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    
      
      <div className="nonTable" style={{width : "100%", display : "flex", flexDirection : "column"}}>
            <div className="tittle" style={{display : "flex", flex : "50%"}}>
              <h4 style={{color : 'white'}}>List Product</h4>
            </div>

            <div className="buttonAdd" style={{display : "flex", justifyContent : "flex-end", flex : "50%"}}>
              <Button onClick={handleAdd} variant='danger' style={{width: "100px", height : "40px"}}>Add</Button>
            </div>
          </div>
        
        <div className="table">
           <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Photo</th>
                  <th>Product Name</th>
                  <th>Product Desc</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {list.map((value) => {
                return <tr>
                <td>{value.no}</td>
                <td><Link to="" style={{color : 'white'}}>{value.photo}</Link></td>
                <td>{value.productName}</td>
                <td>{value.productDesc}</td>
                <td>{value.price}</td>
                <td>{value.qty}</td>
                <td style={{display : 'flex'}}>
                  <div className="button1">
                    <Button variant="success" onClick={handleEdit} style={{width : '100px', borderRadius : '7px', color : 'white'}}>Edit</Button>
                  </div>
                  <div className="button2" style={{marginLeft : '10px'}}>
                    <Button variant="danger" onClick={handleShow} style={{width : '100px', borderRadius : '7px', color : 'white'}}>Delete</Button>
                  </div>
                </td>
            </tr>
              })}
              </tbody>
            </Table>
        </div>
       
    </div>
  )
}

export default TableListProduct;