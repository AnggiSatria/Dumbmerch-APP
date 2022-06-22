import React, { useState } from 'react'
import Font from "../../Assets/Font.module.css";
import { Button } from '@mui/material';

function Filter() {

    const [filter, setFilter] = useState({
        date : "",
        name : "",
    });

    const handleOnChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        console.log(filter)
    }



  return (
    <div>
        <form action="" style={{display : "flex"}} onSubmit={handleOnSubmit}>
            <label style={{color : 'white', marginRight : "20px", fontWeight: "10px"}} className={Font.font}>Sort By : </label>
            <select onChange={handleOnChange} style={{width : "100%", borderRadius : "5px"}}>
                <option onChange={handleOnChange} name="date" value={filter.date}>Date</option>
                <option onChange={handleOnChange} name="name" value={filter.name}>Name</option>
            </select>

            <Button variant='contained' color="error" type='submit' style={{marginLeft : "20px", borderRadius : "5px"}}>Click</Button>
        </form>
        
    </div>
  )
}

export default Filter