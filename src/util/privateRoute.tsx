import React from "react";
import { Navigate } from "react-router-dom";



const PrivateRoute: React.FC<{ childrenComp: React.ReactNode }> = ({ childrenComp }) =>{
    const token = localStorage.getItem("authToken");
    return token ? childrenComp : <Navigate to="/login"/>;
}

export default PrivateRoute ;