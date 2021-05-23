import { useAuth } from "../context/Authcontext";
import { Navigate, Route } from "react-router-dom";
export const PrivateAuth = ({ path, ...props }) => {
  const { login } = useAuth();
  console.log({ path });

  return login ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
