import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios'

function App() {
  const [newuser, setNewuser] = useState('');
  const [users, setUsers] = useState([]);

  const getUsers = () =>{
    axios.get('http://localhost:3000/user')
      .then(function(response){
        console.log(response);
        setUsers(response.data)
      })
    .catch(function(error){console.log(error);});
  }

  useEffect(()=>{
    getUsers();
  },[])

  const sendUser = () => {  
    axios.post('http://localhost:3000/user', { name: newuser }, /*{withCredentials:true} marche sans*/)
      .then(function (response) { console.log(response); })
      .catch(function (error) { console.log(error); });
      getUsers();
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <input type="text" value={newuser} onChange={(e) => setNewuser(e.target.value)}/>
          <button onClick={sendUser}>add user</button>
          <h1>Users: </h1>
          {users.map(user => (
            <li key={user.name}>{user.name}</li>   
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
