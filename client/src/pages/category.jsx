import Navbar from "../components/NavbarAdmin";
import All from "../Assets/All.module.css"
import TableListCategory from "../components/tablelistcategory";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DarkMode from "../components/DarkMode"


const Category = () => {
  document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"

  return (
    <div>
        <div className="Navbar" style={{height : '15vh'}}>
            <Navbar/>
        </div>

      <div className="switch" style={{width: "100%", display : "flex", justifyContent : "center"}}>
        <DarkMode/>
      </div>

        <div className="table" style={{height : '85vh'}}>
            <TableListCategory/>
        </div>
    </div>
  )
}

export default Category;