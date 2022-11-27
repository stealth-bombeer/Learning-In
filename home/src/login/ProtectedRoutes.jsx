import {logged} from '../login'
import { Navigate,Outlet } from "react-router";
const ProtectedRoutes=()=>
{ let auth 
  if(logged)
 {  auth = {'token':true }
  console.log('true')
}
 else 
 {
  auth={'token':false }
  console.log('false')
 }
  return (
    auth.token ?<Outlet />:<Navigate to ="/" />
  )
}


 
export default ProtectedRoutes;