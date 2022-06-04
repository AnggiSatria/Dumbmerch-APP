import React from 'react'
import Table from 'react-bootstrap/esm/Table';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const TableListProduct = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Navigate = useNavigate();

  const handleNavigate = () => {
    Navigate("/edit-product")
  }

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
              <tr>
                  <td>1</td>
                  <td><Link to="" style={{color : 'white'}}>Mouse.jpg</Link></td>
                  <td>Mouse</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>500.000</td>
                  <td>69</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={handleNavigate} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><Link to="" style={{color : 'white'}}>Keyboard.jpg</Link></td>
                  <td>Keyboard</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>500.000</td>
                  <td>69</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={handleNavigate} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><Link to="" style={{color : 'white'}}>Bag.jpg</Link></td>
                  <td>Bag</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>500.000</td>
                  <td>69</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={handleNavigate} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><Link to="" style={{color : 'white'}}>Stationary.jpg</Link></td>
                  <td>Stationar</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>500.000</td>
                  <td>69</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={handleNavigate} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><Link to="" style={{color : 'white'}}>Doll.jpg</Link></td>
                  <td>Doll</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>500.000</td>
                  <td>69</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={handleNavigate} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><Link to="" style={{color : 'white'}}>Pillow.jpg</Link></td>
                  <td>Pillow</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>500.000</td>
                  <td>69</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={handleNavigate} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
        </div>
       
    </div>
  )
}

export default TableListProduct;