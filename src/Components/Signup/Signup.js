import { useState } from 'react';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [firstName, setFirstName] = useState("")
  const [username, setUsername] = useState("")
  const [LastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [Redirect, SetRedirect] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const submit = async (e)=>{
      e.preventDefault();
      console.log('kkk');
      await axios.post("register",{
        first_name: firstName,
        last_name: LastName,
        username,
        phone_number: phone,
        email,
        password,
        confirm_password:ConfirmPassword
      })
      SetRedirect(true)
    }
    if (Redirect){
      return <Navigate to={"/login"}/>
    }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submit}>
          <label htmlFor="fname">First Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Last Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={LastName}
            onChange={(e)=>setLastName(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <label htmlFor="lname">Confirm Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={ConfirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <Link to={'/login'} >Login</Link>
      </div>
    </div>
  );
}
