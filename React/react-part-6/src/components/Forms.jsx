import { useState } from "react"

export default function Forms() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    })


    // let handelNAmeChange = (e) => {
    //     e.preventDefault
    //     setFullName(e.target.value)
    // }
    // let handeluserName = (e) => {
    //     e.preventDefault
    //     setUserName(e.target.value)
    // }

    let handelOnchange = (e) => {
        // let feildName = e.target.name
        // let newValue = e.target.name
        setFormData( (currData) => {
            // currData[feildName] = newValue //or
            return {...currData, [e.target.name] : e.target.value};   
        })  
    }

    let handelSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        })
    }

    return (
        <>
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullname">Enter the Full Name</label>
            <input placeholder='type here' id="fullName" type="text"   value={formData.fullName} onChange={handelOnchange} name="fullName"/>
            <br></br><br></br><br></br><br></br>
            <label htmlFor="username">Enter the Username</label>
            <input placeholder='type here' id="userName" type="text"   value={formData.userName} onChange={handelOnchange} name="userName"/>
            <br></br><br></br><br></br><br></br>
            <label htmlFor="password">Enter the password</label>
            <input placeholder='type here' id="password" type="password"   value={formData.password} onChange={handelOnchange} name="password"/>
            <button>Submit</button>
        </form>
        </>
    )
}