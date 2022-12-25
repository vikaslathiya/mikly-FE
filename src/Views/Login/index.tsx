import {
  FormControl,
  FormControlLabel,
  Grid,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import LoadingSpin from "../../Components/Loader";
import CustomTextField from "../../Components/TextField";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import CustomButton from "../../Components/Button";
import Radio from "@material-ui/core/Radio";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  ILogin,
  LoginAction,
  SignUpAction,
} from "../../Redux/Actions/loginAction";
import { IRedux } from "../../utils/types";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [isLogIn, setIsLogin] = useState(true);
  const [userInput, setUserInput] = useState<ILogin | any>({ role: "User" });
  const [passwordHide, setPasswordHide] = useState<boolean>(true);

  const dispatch = useDispatch();
  const AuthState = useSelector((state: IRedux) => state.Auth);

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    setUserInput({ ...userInput, [textField]: e.target.value });
  };

  const passwordVisibilityHandler = () => setPasswordHide((prve) => !prve);

  const signUpHandler = () => {
    setIsLogin(!isLogIn);
    setUserInput({ role: "User" });
  };

  const userAuthHandler = () => {
    if (isLogIn) dispatch(LoginAction(userInput));
    else dispatch(SignUpAction(userInput));
  };

  return (
    <Fragment>
      {loading && <LoadingSpin />}
      {!loading && (
        <Grid container classes={{ root: "container" }}>
          <Grid item lg={12} md={12} xs={12}>
            <Typography
              variant={"h3"}
              component={"h3"}
              align={"center"}
              classes={{ root: "heading" }}
            >
              myDairy.com
            </Typography>
          </Grid>

          <Grid item lg={12} md={12} xs={12} className={"form"}>
            {isLogIn && (
              <FormControl classes={{ root: "formControl" }}>
                <RadioGroup
                  row
                  name="role"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputChangeHandler(e, "role")
                  }
                  defaultValue={userInput?.role}
                >
                  <FormControlLabel
                    value="User"
                    control={<Radio color="primary" />}
                    label="User"
                    labelPlacement="start"
                    classes={{ root: "from-label" }}
                  />
                  <FormControlLabel
                    value="Admin"
                    control={<Radio color="primary" />}
                    label="Admin"
                    labelPlacement="start"
                    classes={{ root: "from-label" }}
                  />
                </RadioGroup>
              </FormControl>
            )}

            {isLogIn && userInput?.role !== "Admin" && (
              <CustomTextField
                fullWidth
                autoFocus
                type="number"
                label="Agent Code"
                onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  inputChangeHandler(e, "agentCode")
                }
              />
            )}

            {!isLogIn && (
              <CustomTextField
                fullWidth
                autoFocus
                label="Full Name"
                onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  inputChangeHandler(e, "name")
                }
              />
            )}

            {((isLogIn && userInput?.role !== "User") || !isLogIn) && (
              <CustomTextField
                fullWidth
                autoFocus
                label="Username"
                onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  inputChangeHandler(e, "username")
                }
              />
            )}

            {!isLogIn && (
              <CustomTextField
                fullWidth
                type="number"
                label="Mobile No."
                onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  inputChangeHandler(e, "phone")
                }
              />
            )}

            <CustomTextField
              fullWidth
              type={passwordHide ? "password" : "text"}
              label="Password"
              endIcon={
                passwordHide ? (
                  <VisibilityIcon
                    onClick={passwordVisibilityHandler}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={passwordVisibilityHandler}
                    style={{ cursor: "pointer" }}
                  />
                )
              }
              onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                inputChangeHandler(e, "password")
              }
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12} classes={{ root: "btn" }}>
            <CustomButton
              fullWidth
              variant="contained"
              onclick={userAuthHandler}
              buttonText={isLogIn ? "Log In" : "Sign Up"}
            />
          </Grid>

          <Grid item lg={12} md={12} xs={12} classes={{ root: "footer" }}>
            <Typography variant={"body2"} component={"div"} align={"center"}>
              {isLogIn && (
                <>
                  {/* <span className={myStyle.footerText}>Forget Password?</span> |{" "} */}
                  <span className="footerText">Forget Password?</span> |{" "}
                  {/* <span className={myStyle.footerText} onClick={signUpHandler}> */}
                  <span className="footerText" onClick={signUpHandler}>
                    Sign Up
                  </span>
                </>
              )}

              {!isLogIn && (
                // <span className={myStyle.footerText} onClick={signUpHandler}>
                <span className="footerText" onClick={signUpHandler}>
                  If already have account
                </span>
              )}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default LoginPage;
