import { FormGroup, FormControl, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import {useState,useEffect} from 'react'
import { editUser, getUser } from "../service/api";
import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`

const defaultValue={
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser=()=>{
    const [user, setUser]=useState(defaultValue);
    
    const navigate=useNavigate;
    const id= useParams();

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails = async ()=>{
        const response=await getUser(id);
        setUser(response.data);
    }

    const onValuechange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
        navigate('/allusers/');
    }

    const editUserDetails=async ()=>{
        await editUser (user,id);
    }


    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Full Name</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="Name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="UserName" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="Email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="Phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()} component={Link} to={`/edit/${user._id}`} >EDIT USER</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;