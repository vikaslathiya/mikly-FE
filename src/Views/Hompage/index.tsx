import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../Components/Button";
import { LogOutAction } from "../../Redux/Actions/loginAction";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div>
        <h1>Homepage</h1>
        <CustomButton
          buttonText="Logout"
          onclick={() => dispatch(LogOutAction())}
        />
      </div>
    </Fragment>
  );
};

export default HomePage;
