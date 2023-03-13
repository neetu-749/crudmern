import { FormGroup, FormControl, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import {useState,useEffect} from 'react'
import { addUser, getUser } from "../service/api";
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
    }

    const onValuechange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
        navigate('/allusers/');
    }

    const addUserDetails=async ()=>{
        await addUser (user);
    }


    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Full Name</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="Name"/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="UserName"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="Email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="Phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()} component={Link} to={`/edituser/${user._id}`} >EDIT USER</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;