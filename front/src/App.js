//A Garder

import './App.css';
import { useState } from 'react';
import React from 'react'
//import axios from 'axios'

/*function UserForm(){
const [newUser, setnewUser] = useState({});

function handleSubmit(e){
  e.preventDefault();
  console.log(newUser);
}
function onChange(e){
  const name = e.target.name;
  const value = e.targe.value;
  setnewUser(values => ({...values, [name]: value}))
}


return(
  <div>
  <form onSubmit={handleSubmit}>
    <label>
      <input type="text" name="name" value={newUser.name || ""} onChange={onChange}/>
    </label>
    <label>
      <input type="number" name="age" value={newUser.age  || ""} onChange={onChange}/>
    </label>
    <input type="submit"/>
  </form>
  <p>
    {newUser.name}
    {newUser.age}
  </p>
  </div>
);

}*/
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
      </label>
      <label>Enter your age:
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
        </label>
        <input type="submit" />
    </form>
  )
}

function App() {
  
  return (
    <div>
      <MyForm/>  
    </div>
  );
}

export default App;








 /*const [newUser, setnewUser] = useState({name: "", age: ""})
  
  function handleSubmit (e){
    e.preventDefault();
    console.log("submit");
    axios.post('http://localhost:3000/user', {...newUser})
      .then(function (response) { console.log(response); })
      .catch(function (error) { console.log(error); });
  }

  function handleChangeName(e){ setnewUser({...newUser, name: e.target.value }); }
  function handleChangeAge(e){ setnewUser({...newUser, age: e.target.value}); }

  const getUsers = () =>{
    axios.get('http://localhost:3000/user/all')
      .then(function(response){ console.log(response); })
      .catch(function(error){ console.log(error);}); }

  useEffect(()=>{
    getUsers();
  },[])

  return(
    <div>
      <p>Add new user</p>
      <form onSubmit={handleSubmit}>
        <label>Name :
          <input type="text" value={newUser.name} onChange={handleChangeName}/>
        </label>
        <br/>
        <label>Age :
          <input type="number" value={newUser.age} onChange={handleChangeAge}/>
        </label>
        <input type="submit" value="Envoyer"/>
      </form>
      <p>
        {newUser.name}{" "}
        {newUser.age}{" "}
      </p>
    </div>
  );*/