import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";


function Registers(){

    const [show, setShow] = React.useState(false);

    const handleAlert = () => setShow(true);

    return (
        <div>
            <div className="All" style={{display : 'flex', flexDirection : 'column', width : '350px', backgroundColor : 'rgba(34, 32, 33, 0.8)', borderRadius : '10px'}}>
                
            {
                    show? <Stack sx={{ width: '90%', marginTop: "10px", marginLeft : "5%", marginRight: "%"}} spacing={2}>
                    <Alert severity="success">Data telah ditambahkan</Alert>
                </Stack> : null
                }
                
                <div className="Login" style={{marginTop : '10px', marginLeft : '30px'}}>
                    <h1 style={{fontSize : '30px', color : "white"}}>Register</h1>
                </div>

                <div className="page" style={{marginLeft : '30px'}}>
                
                    <div className="Name">
                        <input type="text" placeholder="Name" style={{width: '90%', height : '40px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="Email" style={{marginTop : '15px'}}>
                        <input type="text" placeholder="Email" style={{width: '90%', height : '40px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="password" style={{marginTop : '15px'}}>
                        <input type="text" placeholder="Password" style={{width : '90%', height : '40px', borderRadius : '5px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                
                        <Button onClick={handleAlert} variant="danger" style={{borderRadius : '5px',backgroundColor : 'red', marginTop : '15px', marginBottom : '30px',width : '90%', height : '40px',textDecoration : 'none', color : 'white', textAlign : 'center'}}>Register</Button>
                </div>
                
            </div>
        </div>
    );
}

export default Registers;