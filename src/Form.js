import React, { useContext, useState } from "react";
import { Global } from "./context/GlobalContext";
import History from './History'

export const Form = () =>{
    let [formValue,setformValue] = useState();
    let {GenderApi,addInfo} = useContext(Global)
    async function Callback(event){

        event.preventDefault()
        let fetchLink = "https://api.genderize.io?name="+formValue;
        let fetchValue = await fetch(fetchLink)
        let jsonValue = await fetchValue.json()
        let gen = jsonValue.gender
        if(gen==null){
           gen="other"
        }
        let count = GenderApi.length
          addInfo({
            id: ++count,
            name:formValue,
            gender: gen
          })
          
    
    }
    
return(
    <div className="container">
        <h2 className="heading">Enter a Name and i will try to guess the gender</h2>
        <div className="form-box">
        <form onSubmit={Callback}>
         <label>Name:</label><br/>
         <input  className="text-box" type="text" value = {formValue} placeholder="Enter Name" required="required" onChange={(e)=>{setformValue(e.target.value)}}/><br/>
         <div className="submit"><input type="submit"  value = "Submit"className="submit-btn"/></div>
        </form>    
        </div>
        <h3>History</h3>
        <div className="history-value">
            <li className="top-list"><div>Name</div><div>Gender</div></li>
            {GenderApi.map(gender=>(
                <History GenderApi={gender}/>
            ))}
        </div>
    </div>
)
}