import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {

    const {user,loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-error"></span>
        </div>;
    }

    return <Navigate to={'/login'} />
  
}
