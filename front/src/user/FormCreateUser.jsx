import axios from 'axios'
import { useState } from 'react';

//- Form d'ajout new user
export default function FormCreateUser() {
    const [newUser, setNewUser] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3000/user", {...newUser})
        .then((res) => {console.log(res);})
        .catch((err) => {console.log(err);});
      console.log(newUser);
      alert("Utilisateur cree avec succes");
    }
  
    //- OnChange ajoute le champs a l'objet value
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setNewUser(values => ({...values, [name]: value}))
    }
  
    return (
      <form onSubmit={handleSubmit} style={{backgroundColor: "grey"}}>
      <p>_________________________________________________________________</p>
      <h3>FORM CREATE USER</h3>
        <label>Name:
          <input type="text" name="name" value={newUser.name || ""} onChange={handleChange} />
        </label>
        <br/>
        <label>Email:
          <input type="email" name="email" value={newUser.email || ""} onChange={handleChange} />
        </label>
        <label>Password:
          <input type="text" name="password" value={newUser.password || ""} onChange={handleChange} />
        </label>
        <label>Age:
          <input type="number" name="age" value={newUser.age || ""} onChange={handleChange} />
        </label>
        <input type="submit" value="envoyer"/>
      <p>_________________________________________________________________</p>
      </form>
    )
  }









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