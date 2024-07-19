import React, { useEffect, useState } from 'react'

const userapi = `https://jsonplaceholder.typicode.com/posts`

const Feachapi = () => {
    const [user, setUser] = useState([])

    const userHandeler = async() => {
        const responce = await fetch(userapi)
        const newData = await responce.json()
        setUser(newData)
    }

    useEffect(()=> {
        userHandeler()
    },[])

  return (
    <div>
        {user.map((call)=> {
            return (
                <div>
                    <p>ID:{call.id} <br/><b>Title</b>: {call.title}<br/> <b>Body</b>: {call.body}</p>
                   
                </div>
            )
        })}
    </div>
  )
}

export default Feachapi