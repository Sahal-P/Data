import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom"
import { useDispatch ,useSelector} from 'react-redux';
import { adminAuthActions } from '../../Redux/admin.slice';
import Logo from '../../olx-logo.png';
import './AdminLogin.css';

function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth.value)

  const submit = (e)=>{
      e.preventDefault();
      return dispatch(adminAuthActions.adminLogin({email, password}))
  }
  return (
    <div>
      <div className="adminloginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="admin"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label> 
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="admin"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
