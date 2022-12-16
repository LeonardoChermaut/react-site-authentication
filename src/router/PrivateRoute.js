import { useContext } from "react";
import { Navigate, Outlet} from "react-router-dom";
import UserContext from "../context";

export const PrivateRoute = () => {
  const { signed } = useContext(UserContext);

  return signed ? <Outlet /> : <Navigate to="/login" />;
};


