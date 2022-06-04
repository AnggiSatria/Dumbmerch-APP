import React from 'react'
import IMG from "../Assets/mouses.jpg"
import Dumbmerch from "../Assets/Dumbmerch.png"
import { Link } from 'react-router-dom'

const Transaction = () => {
  return (
    <div style={{width : '60%'}}>
      <Link to="/detail-product" style={{textDecoration : 'none'}}>
        <div className="tittle">
          <h4 style={{color : 'white'}}>My Transaction</h4>
        </div>

        <div className="transaction" style={{display : 'flex', backgroundColor : 'grey'}}>
          <div className="left" style={{flex : '50%', display : 'flex', alignItems : 'center', marginLeft : '30px'}}>
            <div className="img">
              <img src={IMG} alt="" style={{width : '50px', height : '60px'}}/>
            </div>

            <div className="text" style={{marginLeft : '20px'}}>
              <div className="info" style={{color : 'white'}}>
                  <p style={{fontSize : '13px'}}><strong>Mouse</strong></p>
                  <p style={{fontSize : '10px', marginTop : '5px'}}>Saturday 27 April 2022</p>
                  <p style={{fontSize : '10px', marginTop : "5px"}}>price : Rp.500.000,-</p>
              </div>

              <div className="price" style={{color : 'white'}}>
                <p style={{fontSize : '10px'}}>Sub Total : Rp.500.000,-</p>
              </div>
            </div>
          </div>

          <div className="right" style={{flex : '50%', display : 'flex', justifyContent  : 'flex-end', alignItems : 'center', marginRight : '20px'}}>
            <img src={Dumbmerch} alt="" style={{width : '50px', height : '60px'}}/>
          </div>
        </div>
      </Link>
    </div>
  )
}


export default Transaction;
