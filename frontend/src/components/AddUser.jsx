import { FormGroup, FormControl, Input, InputLabel, Typography, styled, Button } from "@mui/material";
// to store values of form in a single object to paas it to backend for storing
import {useState,} from 'react'
import { addUser } from "../service/api";
import {useNavigate} from 'react-router-dom';

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

const AddUser=()=>{
    // we can paas default value here
    // whole object is into the user object
    const [user, setUser]=useState(defaultValue);
    
    const navigate=useNavigate;


    const onValuechange=(e)=>{
        // console.log(e.target.name, e.target.value);
        // use this set function to use e.target.name as key to show name in front of name and so on
        setUser({...user, [e.target.name]: e.target.value}); // we will spread user so it do not overheads(so that old values remain unchanged and new values get updated )
        // console.log(user);
        navigate('/allusers/');
    }

    // this func will be called on button click
    const addUserDetails=async ()=>{
        await addUser(user);
    }


    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Full Name</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValuechange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>ADD USER</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;