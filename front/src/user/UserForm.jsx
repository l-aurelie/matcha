import axios from 'axios'
import { useState } from 'react';

export default function UserForm() {
    const [newUser, setNewUser] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3000/user", {...newUser})
        .then((res) => {console.log(res);})
        .catch((err) => {console.log(err);});
      console.log(newUser);
      alert("Votre profil a ete mis a jour");
    }
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setNewUser(values => ({...values, [name]: value}))
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Name:
        <input type="text" name="name" value={newUser.name || ""} onChange={handleChange} />
        </label>
        <br/>
        <label>Age:
          <input type="number" name="age" value={newUser.age || ""} onChange={handleChange} />
          </label>
          <input type="submit" value="envoyer"/>
      </form>
    )
  }