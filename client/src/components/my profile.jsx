import React from 'react'
import IMG from "../Assets/Luffy.jpg";

const MyProfile = () => {
  return (
    <div>

        <div className="tittle" style={{marginLeft : '30px'}}>
            <h4 style={{color : 'white'}}>My Profile</h4>
          </div>

        <div className="profile" style={{display : 'flex', marginLeft : '30px'}}>
          <div className="img">
            <img src={IMG} alt="" style={{width : '300px'}}/>
          </div>

          <div className="detail" style={{marginLeft : '20px'}}>

            <div className="Name"style={{color : 'white'}}>
              <h4 style={{color : 'red'}}>Name</h4>
              <p style={{fontSize : '13px'}}>Anggi Satria</p>
            </div>


            <div className="Email"style={{color : 'white'}}>
              <h4 style={{color : 'red'}}>Email</h4>
              <p style={{fontSize : '13px'}}>anggisatria122@gmail.com</p>
            </div>

            <div className="Phone"style={{color : 'white'}}>
              <h4 style={{color : 'red'}}>Phone</h4>
              <p style={{fontSize : '13px'}}>0895321589992</p>
            </div>

            <div className="Gender"style={{color : 'white'}}>
              <h4 style={{color : 'red'}}>Gender</h4>
              <p style={{fontSize : '13px'}}>Male</p>
            </div>

            <div className="Address"style={{color : 'white'}}>
              <h4 style={{color : 'red'}}>Address</h4>
              <p style={{fontSize : '13px'}}>Jalan Pupan Rt 009/008 No 32 D Pondok Pinang Kebayoran Lama Jakarta Selatan</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyProfile;