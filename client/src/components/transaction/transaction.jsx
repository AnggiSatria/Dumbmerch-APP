import React from 'react'
import IMG from "../../Assets/mouses.jpg"
import Dumbmerch from "../../Assets/Dumbmerch.png"
import { Link } from 'react-router-dom'

const Transaction = () => {

  const card = [
    {
      img : IMG,
      category : "Mouse",
      date : "Saturday 11 June 2022",
      price : 500000,
      total : 20
    }
  ]

  return (
    <div style={{width : '60%'}}>
      <Link to="/detail-product" style={{textDecoration : 'none'}}>
        <div className="tittle">
          <h4 style={{color : 'white'}}>My Transaction</h4>
        </div>

        {card.map((value) => {
          return <div className="transaction" style={{display : 'flex', backgroundColor : 'grey', marginTop : "20px"}}>
          <div className="left" style={{flex : '50%', display : 'flex', alignItems : 'center', marginLeft : '30px'}}>
            <div className="img">
              <img src={value.img} alt="" style={{width : '50px', height : '60px'}}/>
            </div>

            <div className="text" style={{marginLeft : '20px'}}>
              <div className="info" style={{color : 'white'}}>
                  <p style={{fontSize : '13px'}}><strong>{value.category}</strong></p>
                  <p style={{fontSize : '10px', marginTop : '5px'}}>{value.date}</p>
                  <p style={{fontSize : '10px', marginTop : "5px"}}>price : {value.price}</p>
              </div>

              <div className="price" style={{color : 'white'}}>
                <p style={{fontSize : '10px'}}>Sub Total : {value.total}</p>
              </div>
            </div>
          </div>

          <div className="right" style={{flex : '50%', display : 'flex', justifyContent  : 'flex-end', alignItems : 'center', marginRight : '20px'}}>
            <img src={Dumbmerch} alt="" style={{width : '50px', height : '60px'}}/>
          </div>
        </div>
        })}
        
      </Link>
    </div>
  )
}


export default Transaction;
