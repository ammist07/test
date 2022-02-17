import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context as UserContext } from "../Context/UserContext";

const Protected = () => {
    const userContext = useContext(UserContext);

    return userContext.state.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
