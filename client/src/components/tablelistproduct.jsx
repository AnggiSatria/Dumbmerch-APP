import React from 'react'
import Table from 'react-bootstrap/esm/Table';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const TableListProduct = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Navigate = useNavigate();

  const handleNavigate = () => {
    Navigate("/edit-product")
  }

  const list = [
    {
      no : 1,
      photo : "",
      productName : "Mouse",
      productDesc : "Mouses",
      price : "Rp.500.000",
      qty : 40,
    },
    {
      no : 2,
      photo : "Keyboard.jpg",
      productName : "Keyboard",
      productDesc : "Logitech",
      price : "Rp.300.000",
      qty : 50,
    },
    {
      no : 3,
      photo : "Doll.jpg",
      productName : "Doll",
      productDesc : "Aksesoris",
      price : "Rp.100.000",
      qty : 49,
    },
    {
      no : 4,
      photo : "Bag.jpg",
      productName : "Bag",
      productDesc : "Tas Laptop Anti Air",
      price : "Rp.300.000",
    },
    {
      no : 5,
      photo : "",
      productName : "Stationay",
      productDesc : "",
      price : "",
      qty : "",
    },
  ]

  return (
    <div>

<div className="modals">
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
              <Button variant="success" onClick={handleClose}>
                Yes
              </Button>
            </div>
            
            <div className="btn2" style={{marginLeft : '10px'}}>
              <Button variant="danger">No</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </div>

        <div className="tittle">
          <h4 style={{color : 'white'}}>List Product</h4>
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
                    <Button variant="success" onClick={handleNavigate} style={{width : '100px', borderRadius : '7px', color : 'white'}}>Edit</Button>
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