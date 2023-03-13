import React from 'react';
import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #000000
`;

// if this p is passed as AppBar it will be not working as it will be treated as variable not mui component
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none;
`

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to='/'>Name</Tabs>
                <Tabs to='allusers'>All users</Tabs>
                <Tabs to='adduser'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;