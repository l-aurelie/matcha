import { useState } from "react";
import axios from "axios";

export default function Login(){
    const [user, setUser] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/login", {...user})
            .then((res) => {console.log(res);})
            .catch((err) => {console.error(err);});
        alert("loggin");
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({...values, [name]: value}));
        console.log(user);
    }

    return(
        <div>
            <p>coucou</p>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="text" name="email" value={user.email || ""} onChange={handleChange}/>
                </label>
                <label>Password:
                    <input type="text" name="password" value={user.password || ""} onChange={handleChange}/>
                </label>
                <input type="submit" value="login"/>
            </form>
        </div>
    );
}