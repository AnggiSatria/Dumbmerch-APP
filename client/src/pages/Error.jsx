import React from 'react'
import IMG from '../Assets/confess.png'

const Error = () => {
  return (
    <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', marginTop : '100px'}}>

        <div className="img">
            <img src={IMG} alt="" style={{width : '500px', margin : 'auto'}}/>
        </div>

        <div className="text">
            <p style={{fontSize : '50px'}}>Error 404, file not found</p>
        </div>

    </div>
  )
}

export default Error;