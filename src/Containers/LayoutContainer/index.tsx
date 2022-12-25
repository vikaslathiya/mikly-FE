import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { IRedux } from "../../utils/types";

const LayoutContainer = () => {
  const AuthState = useSelector((state: IRedux) => state.Auth);

  return (
    <div>
      {AuthState?.isLogin ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
};

export default LayoutContainer;
