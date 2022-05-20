import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuthorization() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    !token && navigate("/home");
  }, [navigate]);
}
