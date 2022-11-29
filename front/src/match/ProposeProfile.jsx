import { useEffect } from "react";
import axios from "axios"; 
import { useState } from "react";

//- Affiche les users filtres par age et distance (dont les valeurs sont passees en param de la requete) 
export default function ProposeProfiles(){
  const [allUsers, setAllUser] = useState([]);

  useEffect(() => {
    //- /filter/:age/:distance (modifier manuellement age/distance pour tester)
    axios.get('http://localhost:3000/user/filter/10/35')
      .then(
        (res) => {console.log(res.data);
        setAllUser(res.data);
      })
      .catch((err) => {console.log(err);});
  },[]);
    //  
  return(
    <div>
      {allUsers.map(user => (<li key={user.name}>{user.name} {user.age} : {user.latitude} {user.longitude}</li>))}
  
    </div>
  );
}