
import React, { useEffect, useState } from "react";
import  {getUser,editUser} from "../service/api";

import {  useNavigate ,useParams} from "react-router-dom";

const initialvalue={
    username:'',
    address:'',
    email:''  
}

const EditUser = ()=>{
    

    const [user,setUser]=useState(initialvalue);
    const navigate=useNavigate();
    const {id }=useParams();


    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>{
        let response=await getUser(id);
        setUser(response.data);

    }

    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const addUserDetalis=async()=>{
        await editUser(user,id);
        navigate('/alluser');
    }
   

    return(

   
        <>
         <div className="container mt-3">
         <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                    <p>Edit User</p>
                    </div>
                    <div className="card-body">
                    <form >
                                    <div className="form-group">
                                        <input
                                        name="username"
                                        onChange={(e)=>onValueChange(e)}
                                        type="text" className="form-control" placeholder="Name"  value={user.username}/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                        name="address"
                                        onChange={(e)=>onValueChange(e)}
                                         type="text" className="form-control" placeholder="Address"  value={user.address} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="email"
                                        value={user.email}
                                        onChange={(e)=>onValueChange(e)}        
                                        type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                    <button className='btn btn-success'  onClick={()=>addUserDetalis()}>Edit</button>
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

export default EditUser;