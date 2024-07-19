import React from 'react'
import {userData} from './data.js'


const Data = () => {
  return (
    <div>
        {userData.map((list) => {
           return (
            <div>
                <h3>Names: {list.name}</h3>
                <p>Phone number : {list.phone}</p>
                <p>email: {list.email}</p>
                <p>address : {list.address.city}</p>
            </div>
           )
        })}
    </div>
  )
}

export default Data