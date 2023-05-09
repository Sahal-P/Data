import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";

export const AuthPermission = () => {
    const auth = useSelector((state)=>state.auth.value)
    if (auth){
        return <Navigate to={'/'}/>
    }
  return <Outlet/>  
}




