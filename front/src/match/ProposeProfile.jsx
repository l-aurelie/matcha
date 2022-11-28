import { useEffect } from "react";
import axios from "axios"; 
import { useState } from "react";

export default function ProposeProfiles(){
  const [allUsers, setAllUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user/filter/10/0')
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