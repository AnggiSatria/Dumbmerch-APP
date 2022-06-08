import Navbar from '../components/navbar';
import Contact from '../components/contact';
import Left from '../components/left';
import Right from '../components/right';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Right2 from "../components/Right2"
import DarkMode from '../components/DarkMode';



const Complain = () => {
          
      document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"
      
  return (
    <div>
        <div className="Navbar" style={{height : '15vh'}}>
            <Navbar />
        </div>

        <div className="switch" style={{width: "100%", display: "flex", justifyContent : "center"}}>
            <DarkMode />
        </div>

        <div className="Page" style={{height : '85vh', display : 'flex', marginTop : '50px'}}>
            <div className="left" style={{flex : '25%', display : 'flex'}}>
                <Left />
            </div>
            
            <div className="Zero" style={{height : '100%', border : '1px solid white', marginLeft : '10px', marginRight : '10px'}}></div>

             <div className="right" style={{flex : '75%', display : 'flex', flexDirection : 'column'}}>
                <div className="up" style={{display : 'flex',  flex : '90%', marginBottom : "30px"}}>
                    <Right />
                </div>

               <div className="down" style={{flex : '10%', width : '100%', alignItems : 'flex-end'}}>
                    <Contact />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Complain;