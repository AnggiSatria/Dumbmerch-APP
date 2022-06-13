import React, { useState } from 'react'

const Contact = () => {

  const [complain, setComplain] = useState({
    chats : ""
  })

  const handleOnChange = (e) => {
    setComplain({
      ...complain,
      [e.target.name] : e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(complain)
  }

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input onChange={handleOnChange} name="chats" value={complain.chats} type="text" placeholder='Send Message' style={{width : '98%', height : '40px'}}/>
      </form>
    </div>
  )
}

export default Contact;