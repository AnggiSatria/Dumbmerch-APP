import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";

function Logins(){

    const navigate = useNavigate();

    const route = () => {
        navigate("/profile")
    }

    const [show, setShow] = React.useState(false);

    const handleAlert = () => setShow(true);
    

    return (
        <div>
            <div className="All" style={{display : 'flex', flexDirection : 'column', width : '350px', backgroundColor : 'rgba(34, 32, 33, 0.8)', borderRadius : '10px'}}>
                {
                    show? <Stack sx={{ width: '90%', marginTop: "10px", marginLeft : "5%", marginRight: "%"}} spacing={2}>
                            <Alert severity="error">Data Tidak Ditemukan</Alert>
                        </Stack> : null
                }

                <div className="Login" style={{marginTop : '10px', marginLeft : '30px'}}>
                    <h1 style={{fontSize : '30px', color : 'white'}}>Login</h1>
                </div>

                <div className="page" style={{marginLeft : '30px'}}>
                    
                    <div className="Email">
                        <input type="text" placeholder="Email" style={{width: '90%', height : '40px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="password" style={{marginTop : '15px'}}>
                        <input type="text" placeholder="Password" style={{width : '90%', height : '40px', borderRadius : '5px', borderRadius : '5px', border : 'none'}}/>
                    </div>

                    <div className="button" style={{marginTop : '15px', marginBottom : '30px'}}>
                        <Button variant="danger" onClick={() => {
                            handleAlert()
                            route()
                        }} style={{height : '40px', width : '90%', textDecoration : 'none', color : 'white', textAlign : 'center', borderRadius : '5px'}}>Login</Button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}


export default Logins;