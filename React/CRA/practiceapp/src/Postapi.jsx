
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Postapi = () => {
  const [sector,setSector] = useState("")
  const [topic,setTopic] = useState("")
  const [intensity,setIntensity] = useState("")
  const [source,setSource] = useState("")

  const devdetails = {sector, topic, intensity, source}

  const submithandeler= async(e)=> {
    e.preventDefault()
    console.log(submithandeler)

    const responce = await fetch('URL:URL', {
      method: "POST",
      headers: {
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(devdetails)
      
    },notify())
  } 

  const notify = () =>  toast.success('Updated', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  return (
    <div className="reqapi">
        <div className="section">
            {/* this is sending to form existing Server request */}
            <ToastContainer/>
            <form onSubmit={submithandeler}>
                <h3>Data Requests</h3>
                <label><b>sector</b></label>
                <input type='text' name='sector' onChange={(e)=>setSector(e.target.value)}/>
                <button type='submit'>Submit</button><br/>
                <label><b>topic</b> </label>
                <input type='text' name='topic' onChange={(e)=>setTopic(e.target.value)}/>
                <button type='submit'>Submit</button><br/>
                <label><b>intensity</b></label>
                <input type='text' name='intensity' onChange={(e)=>setIntensity(e.target.value)}/>
                <button type='submit'>Submit</button><br/>
                <label><b>source</b></label>
                <input type='text' name='source' onChange={(e)=>setSource(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  ) 
}

export default Postapi