//Protected component
import { Navigate } from "react-router-dom";
// import useAuth from "./useAuth";

const Protected = ({ children }) => {
    //   const { isAuthenticated } = useAuth();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?.email) return <Navigate to="/login" replace />;

    return children;
};

export default Protected;