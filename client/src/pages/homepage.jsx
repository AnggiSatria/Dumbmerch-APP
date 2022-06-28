import Navbar from "../components/navbar/navbar";
import Cards from "../components/homepage/card";
import All from "../Assets/All.module.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DarkMode from '../components/fitur/DarkMode';
import { Link } from "react-router-dom";
import Filter from "../components/fitur/filter";
import { Container, Row, Col } from "react-bootstrap";
import { API } from "../config/api";
import { useQuery } from "react-query";

function Homepage(){

      document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"

    // useQuery('productData', async () => {
    //     const response = await API.get('/products')
    //     console.log(response);
    // })
    
    return (
        <div>
            <nav className="Navbar" style={{height : '7vh'}}>
                <Navbar />
            </nav>

            <div className="switch" style={{display : "flex", justifyContent : "center"}}>
               <DarkMode />
            </div>

            <div className="Cards" style={{marginTop : '50px', minHeight : "93vh"}}>      
                <Cards/>
            </div>

        </div>
    );
}

export default Homepage;