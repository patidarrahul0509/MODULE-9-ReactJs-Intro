import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
function Getaxios() {
    var [data,setData] = useState([])
     useEffect(()=>{
       Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        setData(response.data)
       })
    })

  return (
    <div>
      {
        data.map((info)=>{
            var {id,username,name,email} = info;
            return(
                <>
                
                <h2>{id}</h2>
                <h3>{username}</h3>
                <h3>{name}</h3>
                <h4>{email}</h4>

                </>
            )
        })
      }
    </div>
  )
}

export default Getaxios
