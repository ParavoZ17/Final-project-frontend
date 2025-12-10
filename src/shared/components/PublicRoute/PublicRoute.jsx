import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../../store/auth/authSelector";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ()=>{
const isToken = useSelector(selectToken);
const user = useSelector(selectUser)
if(isToken && !user) return <p>Loading...</p>
if(user)return <Navigate to="/"/>
return<Outlet/>
}

export default PublicRoute;  