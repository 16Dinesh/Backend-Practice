import { useState } from "react"

export default function ComponetsForm() {

let [formData, setFormData] = useState({
    username : "",
    comments: "",
    rating: 5,
})

let handeleFormData = (e) => {
     setFormData((currData) => {
        return {...currData, [e.target.name] : e.target.value}
    })
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    setFormData({
    username : "",
    comments: "",
    rating: 5,
    })
}



    return ( <>
        <h4>Give me Comments!</h4>  
        <form onSubmit={handleSubmit}> 
        <label htmlFor="username">Enter Your UserName</label><br/><br/>
        <input placeholder="type here!" type="text" name="username" id="username" value={formData.username} onChange={handeleFormData}/><br/><br/>
        <label htmlFor="comments">Type your Comments</label><br/><br/>
        <textarea name="comments" id="comments" value={formData.comments} onChange={handeleFormData}></textarea><br/><br/>
        <label htmlFor="rating">Rating</label><br/><br/>
        <input type="number" name="rating" id="rating"  min={1} max={5} value={formData.rating} onChange={handeleFormData}/> <br/><br/>
        <button>Submit</button>
        </form>
    </>)
}