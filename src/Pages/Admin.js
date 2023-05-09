
import { useEffect } from 'react';
import NavBar from '../Components/Admin/Navbar/NavBar';
import {Table} from '../Components/Admin/Table/Table';
import { userActions } from '../Redux/user.slice';
import { useSelector, useDispatch } from 'react-redux';

function Admin() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(userActions.getUsers())
  },[])
  const data = useSelector((state) => state.user.data)
  return (
    <div className="homeParentDiv">
      <NavBar />
      <Table data={data} />
    </div>
  );
}

export default Admin;
 
