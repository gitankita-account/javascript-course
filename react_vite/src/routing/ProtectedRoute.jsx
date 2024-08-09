import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth] = useState(localStorage.getItem("isAutenticated"));
  const auth = () => {
    if (isAuth === "no" || isAuth === null) {
      navigate("/");
    }
  };

  useEffect(() => {
    auth();
  }, []);

  return <>{isAuth === "yes" && children}</>;
};

export default ProtectedRoute;
