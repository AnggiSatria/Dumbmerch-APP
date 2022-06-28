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
import { API } from '../config/api'; 
import { useMutation } from 'react-query';
import { useEffect } from 'react';


const AddProduct = () => {

    const [categories, setCategories] = useState([]); //Store all category data
    const [categoryId, setCategoryId] = useState([]); //Save the selected category id
    const [preview, setPreview] = useState(null); //For image preview
    const [product, setProduct] = useState({
        image : "",
        name : "",
        desc : "",
        price : "",
        qty : ""
    }) 

    const getCategories = async () => {
        try {
          const response = await API.get('/categories');
          setCategories(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };

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

      const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : 
            e.target.type === 'file' ? e.target.files : e.target.value,
        })
        // create image url for preview 
        if(e.target.type === 'file'){
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url)
        }
    }        

    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            const config = {
                headers : {
                    'Content-type' : "multipart/form-data"
                }
            }

            const formData = new FormData()
            formData.set('image', product.image[0], product.image[0].name);
            formData.set('name', product.name);
            formData.set('desc', product.desc);
            formData.set('price', product.price);
            formData.set('qty', product.qty);
            // formData.set('categoryId', categoryId);

            const response = await API.post("/product", formData, config)

            console.log(response);

            Navigate('/product')

        } catch (error) {
            console.log(error);
        }

    })

    useEffect(() => {
        getCategories();
      }, []);
      
    const Navigate = useNavigate();

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
                <h4 style={{color: 'white'}}>Add Product</h4>
            </div>

            <div className="body" style={{marginTop : '30px'}}>

                <form action="" onSubmit={(e) => handleOnSubmit.mutate(e)}>

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
                       
                        <input name='image' placeholder='Upload' onChange={handleOnChange} type='file' style={{}} ></input>
                                
                    </div>

                    <div className="name" style={{width : '100%', marginTop : '20px'}}>
                        <input onChange={handleOnChange} name='name' type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="category name"/>
                    </div>

                    <div className="desc" style={{width : '100%', marginTop : '10px'}}>
                        <textarea onChange={handleOnChange} name="desc" id="" cols="30" rows="10" style={{width : '96%', marginLeft : '1%', marginRight : "1%", height : '40%', borderRadius : '5px', resize : 'none'}} placeholder="description"></textarea>
                    </div>

                    <div className="price" style={{width : '100%', marginTop : '10px'}}>
                        <input onChange={handleOnChange} name='price' type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="price"/>
                    </div>

                    <div className="stock" style={{width : '100%', marginTop : '10px'}}>
                        <input onChange={handleOnChange} name='qty' type="text" style={{width : '96%', height : '40px', marginLeft : '1%', marginRight : '1%', borderRadius : '5px'}} placeholder="stock"/>
                    </div>
                    
                    <div className="card-form-input mt-4 px-2 py-1 pb-2">
                <div
                  className="text-secondary mb-1"
                  style={{ fontSize: '15px' }}
                >
                  Category
                </div>
                {categories?.map((item, index) => (
                  <label className="checkbox-inline me-4" key={index}>
                    <input
                      type="checkbox"
                      value={item.id}
                      onClick={handleChangeCategoryId}
                      style={{backgroundColor : "#fff"}}
                    />{' '}
                    {item.name}
                  </label>
                ))}
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

export default AddProduct;