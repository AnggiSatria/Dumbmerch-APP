import Content from "../components/users/content";
import Logins from "../components/users/logins";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import  "../Assets/style.css"
import DarkMode from "../components/fitur/DarkMode";
import { Container, Row, Col } from "react-bootstrap";



function Login(){

      document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"      

    return(
      
        <div>
            
                <div className="switch" style={{width : "100%", display : "flex", justifyContent : "center", marginTop : "20px"}}>
                    <DarkMode/>
                </div>

                
                    <div className="page" style={{display : 'flex'}}>
                    <Container>
                        <Row>
                            <Col>
                              <div className="content" style={{flex : '50%', display : 'flex', marginLeft : '50px', alignItems : 'center', marginTop : '100px'}}>
                                    <Content />
                                </div>
                            </Col>
                            <Col>
                                <div className="login" style={{flex : '50%', display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : "150px"}}>
                                    <Logins />
                                </div>  
                            </Col>
                            
                        </Row>
                     </Container>   
                    </div> 
                

                 
        </div>
    );
}




export default Login;