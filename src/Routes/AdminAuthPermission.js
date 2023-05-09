import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";

export const AdminAuthPermission = () => {
    const auth = useSelector((state)=>state.admin.admin)
    const getCookie = (name) => {
      const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
      return cookieValue ? cookieValue.pop() : '';
    };
    const myCookie = getCookie('admin_refresh_token');
    console.log(myCookie,'iiiiiiiiiiiiiiiii');
    if (!auth){
        return <Navigate to={'admin-login'}/>
    }
  return <Outlet/>  
}
