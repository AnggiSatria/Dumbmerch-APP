import Navbar from '../components/navbar/NavbarAdmin';
import { Button } from '@mui/material';
import All from '../Assets/All.module.css';
import { useNavigate, useParams } from 'react-router-dom';
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
import { API } from '../config/api'; 
import { useMutation, useQuery } from 'react-query';
import { useEffect } from 'react';


const UpdateProduct = () => {

    let navigate = useNavigate();
    const { id } = useParams();
  
    const [categories, setCategories] = useState([]); //Store all category data
    const [categoryId, setCategoryId] = useState([]); //Save the selected category id
    const [preview, setPreview] = useState(null); //For image preview
    const [product, setProduct] = useState({}); //Store product data
    const [form, setForm] = useState({
      image: '',
      name: '',
      desc: '',
      price: '',
      qty: '',
    }); //Store product data
  
    // Fetching detail product data by id from database
    useQuery('productCache', async () => {
      const response = await API.get('/product/' + id);
      setPreview(response.data.data.image);
      setForm({
        ...form,
        name: response.data.data.name,
        desc: response.data.data.desc,
        price: response.data.data.price,
        qty: response.data.data.qty,
      });
      setProduct(response.data.data);
    });
  
    // Fetching category data
    useQuery('categoriesCache', async () => {
      const response = await API.get('/categories');
      setCategories(response.data.data);
    });
  
    // For handle if category selected
    const handleChangeCategoryId = (e) => {
      const id = e.target.value;
      const checked = e.target.checked;
  
      if (checked) {
        // Save category id if checked
        setCategoryId([...categoryId, parseInt(id)]);
      } else {
        // Delete category id from variable if unchecked
        let newCategoryId = categoryId.filter((categoryIdItem) => {
          return categoryIdItem != id;
        });
        setCategoryId(newCategoryId);
      }
    };
  
    // Handle change data on form
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]:
          e.target.type === 'file' ? e.target.files : e.target.value,
      });
  
      // Create image url for preview
      if (e.target.type === 'file') {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
      }
    };
  
    const handleSubmit = useMutation(async (e) => {
      try {
        e.preventDefault();
  
        // Configuration
        const config = {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        };
  
        // Store data with FormData as object
        const formData = new FormData();
        if (form.image) {
          formData.set('image', form?.image[0], form?.image[0]?.name);
        }
        formData.set('name', form.name);
        formData.set('desc', form.desc);
        formData.set('price', form.price);
        formData.set('qty', form.qty);
        formData.set('categoryId', categoryId);
  
        // Insert product data
        const response = await API.patch(
          '/product/' + product.id,
          formData,
          config
        );
        console.log(response.data);
  
        navigate('/product-admin');
      } catch (error) {
        console.log(error);
      }
    });
  
    useEffect(() => {
      const newCategoryId = product?.categories?.map((item) => {
        return item.id;
      });
  
      setCategoryId(newCategoryId);
    }, [product]);
  


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
            
            

                <form action="" onSubmit={(e) => handleSubmit.mutate(e)}>

                         {preview && (
                            <div>
                            <img
                                src={preview}
                                style={{
                                maxWidth: "150px",
                                maxHeight: "150px",
                                objectFit: "cover",
                                marginBlock: "1rem",
                                }}
                                alt={preview}
                            />
                            </div>
                        )}

                    <div className="file" style={{width : '96%', display : "flex", marginLeft : "1%", marginRight : "1%"}}>
                       
                        <input name='image' placeholder='Upload' onChange={handleChange} type='file' style={{}} ></input>
                                
                        
                    </div>

                    <div className="name" style={{width : '100%', marginTop : '20px'}}>
                        <input onChange={handleChange} value={form?.name} name='name' type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="category name"/>
                    </div>

                    <div className="desc" style={{width : '100%', marginTop : '10px'}}>
                        <textarea onChange={handleChange} value={form?.desc} name="desc" id="" cols="30" rows="10" style={{width : '96%', marginLeft : '1%', marginRight : "1%", height : '40%', borderRadius : '5px', resize : 'none'}} placeholder="description"></textarea>
                    </div>

                    <div className="price" style={{width : '100%', marginTop : '10px'}}>
                        <input onChange={handleChange} value={form?.price} name='price' type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="price"/>
                    </div>

                    <div className="stock" style={{width : '100%', marginTop : '10px'}}>
                        <input onChange={handleChange} value={form?.qty} name='qty' type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="stock"/>
                    </div>
                    
                    <div className="categories" style={{width : '96%', marginTop : '10px', marginLeft : "1%", marginRight : "1%", backgroundColor : "#fff", height : "40px", padding : "5px", display : "flex", flexWrap : "wrap"}}>
                    {categories.map((value) => {
                        return <form action="">
                            <input name='category' type="checkbox" categoryId={categoryId}
                        value={value?.id}
                        handleChangeCategoryId={handleChangeCategoryId} style={{borderRadius : '5px'}}/>
                            <label htmlFor="" name="category" style={{fontSize : "20px", marginLeft : "10px", marginRight : "10px"}}>{value?.name}</label>
                        </form>
                    })}   
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

export default UpdateProduct;