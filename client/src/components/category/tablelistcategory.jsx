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

  const data = [
    {
      no : 1,
      categoryName : "Mouse",
    },
    {
      no : 2,
      categoryName : "Keyboard"
    }
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

        <div className="All" >
          <div className="nonTable" style={{width : "100%", display : "flex", flexDirection : "column"}}>
            <div className="tittle" style={{display : "flex", flex : "50%"}}>
              <h4 style={{color : 'white'}}>Category</h4>
            </div>

            <div className="buttonAdd" style={{display : "flex", justifyContent : "flex-end", flex : "50%"}}>
              <Button onClick={route} variant='danger' style={{width: "100px", height : "40px"}}>Add</Button>
            </div>
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
                {data.map((value)=> {
                  return <tr>
                  <td>{value.no}</td>
                  <td>{value.categoryName}</td>
                  <td style={{display : 'flex'}}>
                    <div className="button1">
                      <Button variant='success' onClick={route} style={{borderRadius : '7px', color : 'white', textAlign : "center", width : "100px"}}>Edit</Button>
                    </div>
                    <div className="button2" style={{marginLeft : '10px'}}>
                      <Button variant="danger" onClick={handleShow} style={{borderRadius : '7px', color : 'white', textAlign: "center", width : "100px"}}>Delete</Button>
                    </div>
                  </td>
                </tr>
                })}
              </tbody>
            </Table>
          </div>
        </div>

        
    </div>
  )
}

export default TableListCategory;