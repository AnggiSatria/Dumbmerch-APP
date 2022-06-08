import Registers from "../components/registers";
import Content from "../components/content";
import All from "../Assets/All.module.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import DarkMode from '../components/DarkMode';


function Register(){
    
      document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)";

    return (
        <div>
            <div className="switch" style={{width : "100%", display : "flex", justifyContent : "center"}}>
                <DarkMode />
            </div>

           <div className="page" style={{display : 'flex'}}>
                <div className="content" style={{flex : '50%', display : 'flex', marginLeft : '50px', alignItems : 'center', marginTop : '100px'}}>
                    <Content />
                </div>

                <div className="login" style={{flex : '50%', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                    <Registers />
                </div>
            </div>  
        </div>
    )
}

export default Register;