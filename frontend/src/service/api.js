import axios from 'axios';

const URL='http://localhost:5000';

//api calls are synchronous request so we use await to handle them
export const addUser = async(data)=>{
    try{
        return await axios.post(`${URL}/adduser`, data);
    }catch(error){
        console.log('error while calling addUser API',error);
    }
}

export const getUsers=async ()=>{
    try{
        return await axios.get(`${URL}/allusers`)
    }catch(error){
        console.log('Error while getting getUser API',error);
    }
}

export const getUser = async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getUser API',error);
    }
}

export const editUser = async(user,id)=>{
    try{
        return await axios.post(`${URL}/${id}`,user);
    }catch(error){
        console.log('Error while calling editUser API',error);
    }
}

export const deleteUser=async (id)=>{
    try{
        return await axios.delete(`${URL}/${id}`)
    }catch(error){
        console.log('Error while getting deleteUser API',error);
    }
}
