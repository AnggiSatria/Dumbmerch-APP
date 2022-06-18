import React, { useState } from 'react'
import Font from "../../Assets/Font.module.css";

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
            <select onChange={handleOnChange}>
                <option  name="date" value={filter.date}>Date</option>
                <option   name="name" value={filter.name}>Name</option>
            </select>

            <button type='submit'>Click</button>
        </form>
        
    </div>
  )
}

export default Filter