import React from 'react'
const Age = () =>{
    const [age,setage]= React.useState(18)
    const [status,setstatus]= React.useState(true)
    const agehandle =() =>  {
        setage(age+1)
    }  
    const agehandler =() =>  {
        if(age<=18){
        setage(18)
        }
        else{
            setage(age-1)
        }
    } 
     
    return <>
    <h1>Age : {age}</h1>
    <button onClick={agehandle} style={{margin:"10px"}}>Increase Age</button>
    <button onClick={agehandler}>Decrease Age</button>
    <br/>
    {
        (status)?<button onClick={()=>setstatus(false)} >Show More Detalis</button>
        :
        <>
        <button onClick={()=>setstatus(true)}>Hide More Detalis</button>
        <h2>Location: Sirsa</h2>
        <h2>Orgainsation : Masai</h2>
        </>
    }
    </>
}
export default Age;