import React, { useState } from "react";
import { addUser } from "../service/api";

import {  useNavigate } from "react-router-dom";

const initialvalue={
    username:'',
    address:'',
    email:''  
}

const RegistrationForm = ()=>{
    

    const [user,setUser]=useState(initialvalue);
    const navigate=useNavigate();

    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const addUserDetalis=async()=>{
        await addUser(user);
        navigate('/alluser');
    }
   

    return(

   
        <>
         <div className="container mt-3">
         <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                    <p>Registration Form</p>
                    </div>
                    <div className="card-body">
                    <form >
                                    <div className="form-group">
                                        <input
                                        name="username"
                                        onChange={(e)=>onValueChange(e)}
                                        type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                        name="address"
                                        onChange={(e)=>onValueChange(e)}
                                         type="text" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="email"
                                        onChange={(e)=>onValueChange(e)}        
                                        type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                    <button className='btn btn-success' onClick={()=>addUserDetalis()}>Submit</button>
                                    </div>
                    </form>
                    </div>
                </div>
            </div>
         </div>
         </div>
            
        </>
    )
}

export default RegistrationForm;