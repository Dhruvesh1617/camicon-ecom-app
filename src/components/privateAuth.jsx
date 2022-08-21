import { useData } from "../context/Datacontext";
import { Navigate, Route } from "react-router-dom";
export const PrivateAuth = ({ path, ...props }) => {
  const {isAuthenticated} = useData();
  console.log(isAuthenticated);

  return isAuthenticated ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
