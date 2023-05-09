import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";

export const PrivateRoute = () => {
    const auth = useSelector((state)=>state.auth.value)
    const getCookie = (name) => {
      const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
      return cookieValue ? cookieValue.pop() : '';
    };
    const myCookie = getCookie('refresh_token');
    console.log(myCookie,'iiiiiiiiiiiiiiiii');
    if (!auth){
        return <Navigate to={'login'}/>
    }
  return <Outlet/>  
}
