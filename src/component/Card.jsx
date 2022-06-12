import React from 'react'
// import Age from './Age';
// import './App.css'


import Profile from './Profile';
import Todo from './Todo';
const Card =()=>{
 
//  const {name}= props

    return <div style={{display:"flex"} }>
       
        <Profile />
        <Todo />
        
    </div>

}
export default Card;