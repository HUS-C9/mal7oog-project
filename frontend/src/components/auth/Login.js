import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import usercontext from "../../context/userContext";
import axios from "axios";


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { setUserData } = useContext(usercontext)
    const history = useHistory();

    const submit = async (e) => {
      e.preventDefault();
      const loginUser = {email, password};
       const loginRes = await axios.post('http://localhost:1300/api/user/login', loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/") //Q
    };
    

    return (
        <div className="page">
           <h2>Login</h2> 
           <form onSubmit={submit}>
           
               <label htmlFor="login-email">Email</label>
               <input id="login-email" type="email" placeholder="Email"
                 onChange={ e => setEmail(e.target.value)} />
​
               <label htmlFor="login-password">Password</label>
               <input id="login-password" type="password" placeholder= "Password"
                 onChange={ e => setPassword(e.target.value)} 
               />
               
​
               <input type="submit" value="Login"/>
           </form>
        </div>
    )
}