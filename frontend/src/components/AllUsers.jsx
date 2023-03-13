import React from 'react';
import { useEffect, useState } from 'react';

import {Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material';
import {deleteUser, getUsers} from '../service/api';
import {Link} from 'react-router-dom';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
background: #000000;
    & > th {
        font-size: 20px;
        color: #FFFFFF;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 20px
    }
`;

const AllUser = () => {

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }

    const getAllUsers=async()=>{
        let response = await getUsers();
        setUsers(response.data);       
    }

    const deleteUserDetails=async(id)=>{
        await deleteUser(id);
        getAllUsers();
    }


    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map((user)=>{                 
                    return (
                        <TBody key={user._id}>                  
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                                <Button color="secondary" variant="contained" onClick={() => deleteUserDetails(user._id)}>Delete</Button> 
                        </TableCell>
                        </TBody>)
                    })
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;