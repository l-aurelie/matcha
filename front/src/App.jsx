import './App.css';
import React from 'react'
import FormCreateUser from './user/FormCreateUser';
import  { ProposeProfiles } from './match/ProposeProfile';


function App() {
  
  return (
    <div>
      <FormCreateUser/>
      <br/>
      <ProposeProfiles/>
    </div>
  );
}

export default App;
