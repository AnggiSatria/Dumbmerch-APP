import Navbar from '../components/navbar';
import MyProfile from '../components/my profile';
import Transaction from '../components/transaction';
import All from "../Assets/All.module.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DarkMode from '../components/DarkMode';

const Profile = () => {

  document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"


  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="switch" style={{width: "100%", display: "flex", justifyContent : "center"}}>
        <DarkMode />
      </div>

      <div className="Page" style={{display : 'flex', marginTop : '50px'}}>
        <div className="left" style={{display : 'flex', flex : '50%', marginLeft : '30px'}}>
          <MyProfile />
        </div>

        <div className="right" style={{display : 'flex', flex : '50%', width : '100%', marginRight : '30px'}}>
          <Transaction />
        </div>
      </div>
    </div>
  )
}

export default Profile;