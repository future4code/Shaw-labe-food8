import { useEffect } from "react/cjs/react.production.min";
import { useNavigate } from "react-router-dom";

export default function useAuthorization() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    !token && navigate("/");
  }, [navigate]);
}
