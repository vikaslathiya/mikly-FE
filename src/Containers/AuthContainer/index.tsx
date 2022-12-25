import { useSelector } from "react-redux";
import { IRedux } from "../../utils/types";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const AuthContainer = () => {
  const AuthState = useSelector((state: IRedux) => state.Auth);

  return <>{AuthState?.isLogin ? <Navigate to={"/homepage"} /> : <Outlet />}</>;
};

export default AuthContainer;
