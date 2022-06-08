import Navbar from '../components/NavbarAdmin';
import { Button } from '@mui/material';
import All from '../Assets/All.module.css';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DarkMode from '../components/DarkMode';


const EditProduct = () => {
    const Navigate = useNavigate;
    const handleNavigate = () => {
        Navigate("/product")
    }

    const Input = styled('input')({
      display: 'none',
    });

      document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"
    

  return (
    <div>
        <nav style={{height: '7vh'}}>
            <Navbar/>
        </nav>

        <div className="switch" style={{width : "100%", display : "flex", justifyContent : "center"}}>
            <DarkMode />
        </div>

        <div className="All" style={{height : '93vh', marginTop : '100px'}}>
            <div className="teks" style={{marginLeft : '30px'}}>
                <h4 style={{color: 'white'}}>Edit Product</h4>
            </div>

            <div className="body" style={{marginTop : '30px'}}>
                <form action="">
                    <div className="file" style={{width : '100%'}}>
                        <label htmlFor="contained-button-file" style={{color : 'white', width : "96%", marginLeft : '1%', marginRight : '1%'}}>
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span" color='error' style={{color : "white"}}>
                              Upload Image
                            </Button>
                        </label>
                    </div>

                    <div className="name" style={{width : '100%', marginTop : '20px'}}>
                        <input type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}}/>
                    </div>

                    <div className="desc" style={{width : '100%', marginTop : '10px'}}>
                        <textarea name="" id="" cols="30" rows="10" style={{width : '96%', marginLeft : '1%', marginRight : "1%", height : '40%', borderRadius : '5px', resize : 'none'}}></textarea>
                    </div>

                    <div className="price" style={{width : '100%', marginTop : '10px'}}>
                        <input type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}}/>
                    </div>

                    <div className="stock" style={{width : '100%', marginTop : '10px'}}>
                        <input type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}}/>
                    </div>

                    <div className="button" style={{marginTop : '30px', width : "100%", marginLeft : '1%', marginRight : '1%'}}>
                        <Button onClick={handleNavigate} variant="contained" color='success' style={{width : '96%'}}>Save</Button>{' '}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditProduct;