import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { PrivateRoute } from './Routes/PrivateRoute';
import { AuthPermission } from './Routes/AuthPermission';
import { AdminAuthPermission } from './Routes/AdminAuthPermission';
import { Provider } from 'react-redux';
import './Interceptors/axios'
import { store } from './Redux/store';
import AdminLogin from './Pages/AdminLogin';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Routes>
      <Route element={<PrivateRoute/>}>
        
        <Route exact path={'/'} element={<Home/>}/>
      </Route>
      <Route element={<AuthPermission/>}>
        <Route path={'/signup'} element={<Signup/>}/>
        <Route path={'/login'} element={<Login/>}/>
      </Route>
      <Route element={<AdminAuthPermission/>}>
        <Route path='/admin' element={<Admin/>}/>
      </Route>
      <Route>
        <Route path='/admin-login' element={<AdminLogin/>}/>
      </Route>

      </Routes>

    </div>
    </Router>
    </Provider>
  );
}

export default App;
