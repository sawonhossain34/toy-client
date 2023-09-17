import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const {user , loading} =useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-warning w-56" value="40" max="100"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to='/login' replace></Navigate>
    
};

export default ProtectedRoute;