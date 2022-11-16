//A Garder

import './App.css';
import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios'
  
/*const sendUser = () => {  
    axios.post('http://localhost:3000/user', { name: newuser })
      .then(function (response) { console.log(response); })
      .catch(function (error) { console.log(error); });
      getUsers();
  }*/

function sendUser(newUser){
  console.log("sendUser");
  console.log(newUser);
  axios.post('http>//localhost:3000/user', {newUser})
  .then((res) => {console.log(res);})
  .catch((err) => {console.log(err)});
}

function UserForm(){
  const [newUser, setnewUser] = useState({name: "", age: ""})
  function handleSubmit (){
    console.log("submit");
    sendUser(newUser.name);
  }

  function handleChangeName(e){ setnewUser({...newUser, name: e.target.value }); }
  function handleChangeAge(e){ setnewUser({...newUser, age: e.target.value}); }

  return(
    <div>
      <p>Add new user</p>
      <form onSubmit={handleSubmit}>
        <label>Name :
          <input type="text" value={newUser.name} onChange={handleChangeName}/>
        </label>
        <br/>
        <label>Age :
          <input type="text" value={newUser.age} onChange={handleChangeAge}/>
        </label>
        <input type="submit" value="Envoyer"/>
      </form>
      <p>
        {newUser.name}{" "}
        {newUser.age}{" "}
      </p>
    </div>
  );
}

function App() {
 /* const [newuser, setNewuser] = useState('');
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


  */

  
  return (
    <div>
      <UserForm/>  
    </div>
  );
}

export default App;
