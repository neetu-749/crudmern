
import logo from './logo.svg';
import './App.css';

import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Name from './components/Name';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';

// browser based routing/ url based routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Name />} />
        <Route path='/allusers' element={<AllUsers/>} />
        <Route path='/adduser' element={<AddUser/>} />
        <Route path='/edituser/:id' element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
