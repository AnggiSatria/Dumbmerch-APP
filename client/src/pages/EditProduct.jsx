import Navbar from '../components/navbar/NavbarAdmin';
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
import DarkMode from '../components/fitur/DarkMode';
import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Form } from 'react-bootstrap';
import "../Assets/style.css"


const EditProduct = () => {
      
    const Navigate = useNavigate();
    const handleNavigate = () => {
        Navigate("/product")
    }

    const Input = styled('input')({
      display: 'none',
    });

      document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"

    const [product, setProduct] = useState({
        img : "",
        categoryName : "",
        desc : "",
        price : "",
        qty : ""
    }) 

    const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }
        

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(product)
        handleNavigate()
    }
    

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
                <form action="" onSubmit={handleOnSubmit}>
                    <div className="file" style={{width : '96%', display : "flex", marginLeft : "1%", marginRight : "1%"}}>
                       
                        <input name='img' value={product.img} onChange={handleOnChange} type='file' style={{}} ></input>
                                
                    </div>

                    <div className="name" style={{width : '100%', marginTop : '20px'}}>
                        <input onChange={handleOnChange} name='categoryName' value={product.categoryName} type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="category name"/>
                    </div>

                    <div className="desc" style={{width : '100%', marginTop : '10px'}}>
                        <textarea onChange={handleOnChange} name="desc" value={product.desc} id="" cols="30" rows="10" style={{width : '96%', marginLeft : '1%', marginRight : "1%", height : '40%', borderRadius : '5px', resize : 'none'}} placeholder="description"></textarea>
                    </div>

                    <div className="price" style={{width : '100%', marginTop : '10px'}}>
                        <input onChange={handleOnChange} name='price' value={product.price} type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="price"/>
                    </div>

                    <div className="stock" style={{width : '100%', marginTop : '10px'}}>
                        <input onChange={handleOnChange} name='qty' value={product.qty} type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="stock"/>
                    </div>

                    <div className="button" style={{marginTop : '30px', width : "100%", marginLeft : '1%', marginRight : '1%'}}>
                        <Button type='submit' variant="contained" color='success' style={{width : '96%'}}>Save</Button>{' '}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditProduct;