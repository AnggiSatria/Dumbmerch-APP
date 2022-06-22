import Navbar from '../components/navbar/navbar';
import Contact from '../components/complain/contact';
import Left from '../components/complain/left';
import Right from '../components/complain/right';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Right2 from "../components/complain/Right2"
import DarkMode from '../components/fitur/DarkMode';



const Complain = () => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }
          
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
                <Left handleClick={handleClick}/>
            </div>
            
            <div className="Zero" style={{height : '100%', border : '1px solid white', marginLeft : '10px', marginRight : '10px'}}></div>

            {
                show ? <div className="right" style={{flex : '75%', display : 'flex', flexDirection : 'column'}}>
                <div className="up" style={{display : 'flex', flex : '90%', marginBottom : "20px", height : '75%', overflow : "auto"}}>
                    <Right />
                </div>

                <div className="down" style={{flex : '10%', width : '100%', alignItems : 'flex-end', height : "25%"}}>
                    <Contact />
                </div>
            </div> : <div className="right2" style={{flex : '75%', display : 'flex', flexDirection : 'column'}}>
                <Right2 />
            </div>
            }

            
        </div>
    </div>
  )
}

export default Complain;