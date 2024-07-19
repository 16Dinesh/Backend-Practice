
import React from 'react'

import {useState, useEffect} from 'react'

const Admin = () => {
    const [city, setCity] = useState("Kurnool");
    
    useEffect(()=> {
        if (city === "Goa") {
            setCity("Hyd");
        }else {
            setCity("India")
        }
    },[city])

  return (

    <div>{city}</div>
  )
}

export default Admin