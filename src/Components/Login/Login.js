import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom"
import { useDispatch ,useSelector} from 'react-redux';
import { setAuth, authActions } from '../../Redux/auth.slice';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth.value)

  const submit = (e)=>{
      e.preventDefault();
      return dispatch(authActions.login({email, password}))
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
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
            defaultValue="Doe"
            onChange={(e)=>setPassword(e.target.value)}

          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <Link to={'/signup'}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
