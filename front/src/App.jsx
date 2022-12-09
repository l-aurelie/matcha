//TODO : gestion erreur try catch, champs form controlle

import './App.css';
import React from 'react'
import FormCreateUser from './user/FormCreateUser';
import ProposeProfiles from './match/ProposeProfile';
import Login from './auth/Login';


function App() {
  
  return (
    <div>
      <FormCreateUser/>
      <br/>
      <ProposeProfiles/>
      <br/>
      <Login/>
    </div>
  );
}

export default App;
