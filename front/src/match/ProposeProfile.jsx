import { useEffect } from "react";
import axios from "axios"; 
import { useState } from "react";
import Select from "react-select";
import { authHeader} from "../auth/authService";

  const ageOptions = [ {value: 10, label:'Select age gap'}, {value: 2, label:'2 years'}, {value: 5, label:'5 years'}, {value: 7, label:'7 years'}, {value: 10, label:'10 years'}, {value: 15, label:'15 years'}, {value: 25, label:'25 years'}, {value: 200, label:'unlimited'} ];
  const distanceOptions = [ {value: 30, label:'Select distance range'}, {value: 5, label:'5 km'}, {value: 10, label:'10 km'}, {value: 20, label:'20 km'}, {value: 30, label:'30 km'}, {value: 50, label:'50 km'}, {value: 100, label:'100 km'}, {value: 200, label:'200 km'}, {value: 2000, label:'unlimited'} ];
  
function ChangeFilterValues(props) {  
  
  function changeAge(e) { props.setAgeRange(e.value); }
  function changeDistance(e) { props.setDistanceRange(e.value); }
  
  return(
    <div>
      <Select defaultValue={props.ageRange} onChange={changeAge} options={ageOptions} />
      <Select defaultValue={props.distanceRange} onChange={changeDistance} options={distanceOptions} />
    </div>);
}  

//- Affiche les users filtres par age et distance (dont les valeurs sont passees en param de la requete) 
export default function ProposeProfiles(){
  const [allUsers, setAllUser] = useState([]);
  
  const [ageRange, setAgeRange] = useState();// TODO useState or var
  const [distanceRange, setDistanceRange] = useState();
  
  useEffect(() => {
    axios.get('http://localhost:3000/filter', 
              {params: {age : ageRange || 10, distance : distanceRange || 30 }, headers: authHeader()}
              )
      .then(
        (res) => {console.log(res.data);
        setAllUser(res.data);
      })
      .catch((err) => {console.log(err);});
  },[ageRange, distanceRange]);

  return(
    <div style={{backgroundColor: 'grey'}}>
      <p>_________________________________________________________________</p>
      <h3>PROPOSE PROFILES</h3>
      <ChangeFilterValues ageRange={ageRange} setAgeRange={setAgeRange} distanceRange={distanceRange} setDistanceRange={setDistanceRange}/>
      {allUsers.map(user => (<li key={user.user_id}>{user.name} {user.age} : {user.latitude} {user.longitude}</li>))}
      <p>_________________________________________________________________</p>
    </div>
  );
}