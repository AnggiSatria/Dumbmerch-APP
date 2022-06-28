import React from 'react'
import Mouse from "../../Assets/mouses.jpg"
import Keyboard from "../../Assets/Keyboard.jpg"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { API } from '../../config/api'

const Card = () => {

  let { data : products } = useQuery('productsCache', async () => {
    const response = await API.get('/products');
    return response.data.data;
  });

  return (
    <div>
      <div className="text" style={{marginTop : '70px', marginLeft : '30px'}}>
          <h1 style={{color : 'rgba(208, 21, 62, 0.8)', fontSize : '20px'}}>Product</h1>
        </div>

      <div className="All" style={{display : 'flex', flexWrap : 'wrap'}}>

         {products?.map((item) => (
            <Link to={"/product/" + item.id} style={{textDecoration : "none"}}>
              <div className="card1" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
                <div className="img">
                  <img src={item.image} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
                </div>

                <div className="desc">
                  <h1 style={{color : 'white', fontSize : '15px'}}>{item.category}</h1>
                    <p style={{color : 'white', fontSize : '10px'}}>{item.price}</p>
                    <p style={{color : 'white', fontSize : '10px'}}>{item.qty}</p>
                </div>
              </div>
            </Link>
         ))}

      </div>

    </div>
  )
}

export default Card;