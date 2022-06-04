import React from 'react'
import Mouse from "../Assets/mouses.jpg"
import Keyboard from "../Assets/Keyboard.jpg"

const Card = () => {
  return (
    <div>
      <div className="text" style={{marginTop : '70px', marginLeft : '30px'}}>
          <h1 style={{color : 'white', fontSize : '20px'}}>Product</h1>
        </div>

      <div className="All" style={{display : 'flex', flexWrap : 'wrap'}}>

        <div className="card1" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Mouse} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>

        <div className="card2" style={{width : '200px', height : '300px', border : 'none', marginLeft : '20px', marginTop : '30px', backgroundColor : 'grey', borderRadius : '5px'}}>
          <div className="img">
            <img src={Keyboard} alt="" style={{width : '100%', backgroundColor : 'white', height : '200px'}}/>
          </div>

          <div className="desc">
            <h1 style={{color : 'white', fontSize : '15px'}}>Mouse</h1>
            <p style={{color : 'white', fontSize : '10px'}}>Rp.500.000,-</p>
            <p style={{color : 'white', fontSize : '10px'}}>Stock : 600</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card;