import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"



const TableListCategory = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const route = () => {
    navigate("/edit-category");
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
              <Button variant="success">
                Yes
              </Button>
            </div>
            
            <div className="btn2" style={{marginLeft : '10px'}}>
              <Button onClick={handleClose} variant="danger">No</Button>
            </div>
            
          </div>
        </Modal.Body>
      </Modal>
    </div>

        <div className="All">
          <div className="tittle">
            <h4 style={{color : 'white'}}>Category</h4>
          </div>

          <div className="table">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={route} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={route} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={route} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={route} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jacob</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={route} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <button onClick={handleShow} style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '7px', color : 'white'}}>Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Jacob</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <button onClick={route} style={{width : '100px', height : '30px', backgroundColor : 'green', borderRadius : '7px', color : 'white'}}>Edit</button>
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

        
    </div>
  )
}

export default TableListCategory;