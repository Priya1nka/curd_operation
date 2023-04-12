import axios from 'axios';

const API_URL="http://localhost:3030/users"

export const addUser=async (data)=>{
try{
     return await axios.post(API_URL,data);
}catch(error){
    console.log("Error while calling adduser api",error.meassage);
}
}


export const getUsers=async ()=>{
    try{
         return await axios.get(API_URL);
    }catch(error){
        console.log("Error while calling getuser api",error.meassage);
    }
    }

    
export const getUser=async (data)=>{
    try{
         return await axios.get(`${API_URL}/${data}`);
    }catch(error){
        console.log("Error while calling getuser api",error.meassage);
    }
    }

    export const editUser=async (data,id)=>{
        try{
             return await axios.put(`${API_URL}/${id}`,data);
        }catch(error){
            console.log("Error while calling edituser api",error.meassage);
        }
        }  

        export const deleteUser=async (id)=>{
            try{
                 return await axios.delete(`${API_URL}/${id}`)
            }catch(error){
                console.log("Error while calling deleteuser api",error.meassage);
            }
            }