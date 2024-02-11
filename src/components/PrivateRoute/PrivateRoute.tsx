import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUserSelector } from "../../store";
import { useAppSelector } from "../../hooks";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(getUserSelector)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      navigate("/auth/login");
    }
  }, [user, navigate]);

  return <>{children}</>;
};
