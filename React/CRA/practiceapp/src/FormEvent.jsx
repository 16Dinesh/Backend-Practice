import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const FormEvent = () => {
    const [text, setText] = useState("")

    const [textDetails, setTextDetals] = useState()

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
    
    const getText=(t) => {
        setText(t.target.value)
    }

    const textbtn = (e) => {
        e.preventDefault();
        setTextDetals(text)
        notify()
    }
  return (
    <section className='FormSection'>
        <h1>Type and Submit</h1>
        <ToastContainer/>
        <form onSubmit={textbtn}>
        <div className='inputDiv'>
        <h2>{textDetails}</h2>
            <input type='text' placeholder='Enter Your Text' onChange={getText}></input>&nbsp;&nbsp;
            <button className='SubmitBtn' type='submit'>Submit</button>
            
        </div>
        
        </form>
    </section>
  )
}

export default FormEvent