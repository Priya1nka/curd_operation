import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../service/api";
import { Link } from "react-router-dom";

let TableData = ()=>{

    const [users,setUsers]=useState([]);
    useEffect(()=>{
          getUsersDetails();
    },[])


    const getUsersDetails=async()=>{
        let response=await getUsers();
        console.log(response);
        setUsers(response.data);

    }


    const deleteUserData=async(id)=>{
         await deleteUser(id);
         getUsersDetails();
    }

    return(
        <>
         <div className="container mt-3">
         <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                    <p>Registration Data</p>
                    </div>
                    <div className="card-body">
                    <table className="table table-hover text-center table-striped table-light">
                            <thead className="bg-dark text-white">
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                users.map(user=>(
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                       {/*  <td><button className=" btn btn-primary" component={Link} to={`/edit/${user.id}`}>EDIT</button></td> */}
                                       <td><button className="btn btn-primary" ><Link to={`/edit/${user.id}`}>Edit</Link></button></td>
                                        <td><button className="btn btn-warning" onClick={()=>deleteUserData(user.id)}>Delete</button></td>
                        
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         </div>

         </div>
            
        </>
    )
}

export default TableData;