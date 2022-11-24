import './App.css';
import React from 'react'
import UserForm from './user/UserForm';
import ProposeProfiles from './match/ProposeProfile';


function App() {
  
  return (
    <div>
      <UserForm/>
      <ProposeProfiles/>
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