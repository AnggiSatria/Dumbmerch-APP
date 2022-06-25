import Navbar from '../components/navbar/navbar';
import All from '../Assets/All.module.css';
import Mouse from "../Assets/mouses.jpg";
import { Button } from 'react-bootstrap';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import DarkMode from '../components/fitur/DarkMode';

const DetailPage = () => {

  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate("/profile")
  }

  document.body.style.backgroundColor="rgba(0, 0, 0, 0.97)"

  return (

    <div>
        <div className="Navbar" style={{height : '15vh'}}>
            <Navbar />
        </div>

        <div className="switch" style={{width : "100%", display : "flex", justifyContent : "center"}}>
          <DarkMode/>
        </div>

        <div className="content" style={{height : '85vh', display : 'flex', alignItems : 'center', marginTop : '50px'}}>
          <div className="left" style={{flex : '50%', display : 'flex', justifyContent : 'flex-end', marginRight : '20px'}}>
            <img src={Mouse} alt="" style={{width : '400px', height : '500px'}}/>
          </div>

          <div className="right" style={{flex : '50%', display : 'flex', justifyContent : 'flex-start', marginLeft : '20px', flexDirection : 'column', marginLeft : '10px', marginRight : '30px'}}>
              <div className="tittle" style={{color : 'white'}}>
                <h1 style={{color : "rgba(249, 37, 76, 0.92)"}}>Mouse</h1>
                <p>Stock : 600</p>
              </div>

              <div className="qualification" style={{color : 'white'}}>
                <p>-Wireless Mouse</p>
                <p>-Konektivitas Wireless 2.4 Ghz</p>
                <p>-Jarak Wireless hingga 10m</p>
                <p>-plug and play</p>
                <p>-Baterai tahan hingga 12 bulan</p>
              </div>

              <div className="desc" style={{color : 'white'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur fuga cumque sit animi aut neque itaque, eveniet recusandae iste soluta eum perspiciatis aperiam numquam voluptas enim illo quo exercitationem.</p>
              </div>

              <div className="price" style={{color : 'red', display : 'flex', justifyContent : 'flex-end'}}>
                <h2 style={{color : "rgba(249, 37, 76, 0.92)"}}>Rp.300.000,-</h2>
              </div>

              <Button onClick={handleNavigate} variant='danger' style={{width : '100%', height : '40px', backgroundColor : 'red', color : 'white'}}>Buy</Button>
          </div>
        </div>
    </div>
  )
}

export default DetailPage;