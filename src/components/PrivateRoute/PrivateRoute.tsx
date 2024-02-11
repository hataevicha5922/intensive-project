import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuthorizeCheckedSelector, getUserSelector } from "../../store";
import { useAppSelector } from "../../hooks";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(getUserSelector)!;
  const authorizeChecked = useAppSelector(getAuthorizeCheckedSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email && authorizeChecked) {
      navigate("/auth/login");
    }
  }, [user, navigate, authorizeChecked]);

  return authorizeChecked && <>{children}</>;
};
