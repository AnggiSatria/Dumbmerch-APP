import NavbarAdmin from '../components/navbar/NavbarAdmin';
import All from '../Assets/All.module.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DarkMode from '../components/fitur/DarkMode';
import { useMutation } from 'react-query';
import { API } from '../config/api';

const AddCategory = () => {


    const [category, setCategory] = useState('')

    const handleOnChange = (e) => {
        setCategory(e.target.value)
    }

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            const config = {
                headers: {
                  'Content-type': 'application/json',
                },
              };

              const body = JSON.stringify({ name: category });

              const response = await API.post('/category', body, config);

              Navigate("/category");
        } catch (error) {
            console.log(error);
        }
        
    })
    

    const Navigate = useNavigate();

      document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"
    

  return (
    <div style={{height : '100%'}}>
        <nav style={{height : '7vh'}}>
            <NavbarAdmin/>
        </nav>

        <div className="switch" style={{width : "100%", display : "flex", marginTop: "30px", justifyContent : "center"}}>
            <DarkMode />
        </div>
        

        <div className="All" style={{height : '93vh', marginTop : '100px'}}>
            <div className="teks">
                <h4 style={{color : 'white', marginLeft : '30px'}}>Add Category</h4>
            </div>

            <form action="" style={{marginTop : '30px', display : 'flex', flexDirection: 'column'}} onSubmit={(e) => handleOnSubmit.mutate(e)}>
                <div className="input" style={{marginLeft : '2%', marginRight : '2%', width : '100%'}}>
                    <input type="text" name='category' value={category} onChange={handleOnChange} placeholder='Insert Category' style={{width : '96%', height : '40px'}}/>
                </div>

                <div className="button" style={{marginTop : '30px', width : "100%", marginLeft : '2%', marginRight : '2%'}}>
                    <Button  type='submit' variant="success" style={{width : '96%'}}>Save</Button>{' '}
                </div>
            </form>
        </div>

    </div>
  )
}

export default AddCategory;