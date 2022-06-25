import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { width } from "@mui/system";
import { style } from "@mui/system";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';
import { Users } from "../dummy/Users"

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
  const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    display: flex;
    font-weight: 500;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    align-items: center;
    justify-content: center;
  
    &.${inputUnstyledClasses.focused} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  `,
  );
  
  const StyledInputElement = styled('input')(
    ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    flex-grow: 1;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 12px 12px;
    outline: 0;
  `,
  );
  
  const IconButton = styled(ButtonUnstyled)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: inherit;
    cursor: pointer;
  `;
  
  const InputAdornment = styled('div')`
    margin: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `;
  
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    const { components, ...other } = props;
    return (
      <InputUnstyled
        components={{
          Root: StyledInputRoot,
          Input: StyledInputElement,
          ...components,
        }}
        {...other}
        ref={ref}
      />
    );
  });
  
  CustomInput.propTypes = {
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
      Input: PropTypes.elementType,
      Root: PropTypes.elementType,
      Textarea: PropTypes.elementType,
    }),
  };

function Logins(){

  const [login, setLogin] = useState({
    email : "",
    password : "",
  })

  const handleOnChange = (e) => {
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }
console.log(login);

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
        handleOnChange()
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const navigate = useNavigate();

    const route = () => {
        navigate("/homepage")
    }

    const admin = () => {
      navigate("/product")
    }
    
    const [show, setShow] = React.useState(false);

    const dataUser = Users
    console.log(dataUser);

    const handleOnSubmit = (e) => { //handlesubmit gunanya ketika submit dia membawa state yang ada di dalamnya
        e.preventDefault() //biar tidak refesh ke halaman baru

         const data = dataUser.find((user) => user.email === login.email ) 
         console.log(data);

         if (data) {
             if (data.password !== login.password){
                setShow(true)
                console.log('password salah');
             } else {
                 setShow(false)
                 if(data.status === "Users"){
                   route()
                 }else if (data.status === "Admin"){
                   admin()
                 }
                 console.log('login berhasil');
             }
         } else {
             setShow(true)
             console.log('email tidak terdaftar');
         }
        }

    return (
        <div>
            <div className="All" style={{display : 'flex', flexDirection : 'column', width : '350px', backgroundColor : 'rgba(34, 32, 33, 0.8)', borderRadius : '10px'}}>
                {
                    show && (<Stack sx={{ width: '90%', marginTop: "10px", marginLeft : "5%", marginRight: "%"}} spacing={2}>
                            <Alert severity="error">Data Tidak Ditemukan</Alert>
                        </Stack>)
                }

                <div className="Login" style={{marginTop : '10px', marginLeft : '30px'}}>
                    <h1 style={{fontSize : '30px', color : 'white'}}>Login</h1>
                </div>

                <div className="page" style={{marginLeft : '30px'}}>
                  <form action="" onSubmit={handleOnSubmit}>
                    <div className="Email">
                        <input name="email" value={login.email} type="email" placeholder="Email" style={{width: '90%', height : '45px', borderRadius : '5px', border : 'none'}} onChange={handleOnChange}/>
                    </div>

                    <div className="password" style={{marginTop : '15px', width : "100%"}}>
                        <Box sx={{ display: 'flex', '& > * + *': { ml: 1 } }}>
                            <CustomInput
                                id="outlined-adornment-password"
                                name="password"
                                placeholder="Password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={login.password}
                                onChange={handleOnChange}
                                style={{width : "90%"}}
                                endAdornment={
                                <InputAdornment>
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </Box>
                    </div>

                    <div className="button" style={{marginTop : '15px', marginBottom : '30px'}}>
                        <Button type="submit" variant="danger" style={{height : '40px', width : '90%', textDecoration : 'none', color : 'white', textAlign : 'center', borderRadius : '5px'}}>Login</Button>
                    </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}


export default Logins;