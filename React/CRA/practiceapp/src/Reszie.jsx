import React, {useState, useEffect} from 'react'

const Reszie = () => {
    const [screenSize, setScreenSize ] =  useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const updateScreenSize = () => {
        setScreenSize ({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=> {
        window.addEventListener("resize", updateScreenSize)

        return () => {
            window.removeEventListener("resize", updateScreenSize)
        }
    },[screenSize])
  return (
    <div>
        <h1>Screen Size</h1>
        <p>Resize the window to see the screen Size</p>
        <p style={{color:"red", fontSize: "2rem"}}><b>Width : {screenSize.width}PX</b></p>
        <p style={{color:"red", fontSize: "2rem"}}><b>Height : {screenSize.height}PX</b></p>
    </div>
    
  )
}

export default Reszie