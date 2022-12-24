import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import "./style.css";

const CustomButton = (props: any) => {
  const {
    variant,
    buttonType,
    buttonText,
    onclick,
    fullWidth,
    disabled,
    size,
    startIcon,
  } = props;

  return (
    <Fragment>
      <Button
        type={buttonType}
        fullWidth={fullWidth}
        onClick={onclick}
        color="primary"
        size={size}
        variant={variant}
        classes={{ root: "btn" }}
        disabled={disabled}
        startIcon={startIcon}
      >
        {buttonText}
      </Button>
    </Fragment>
  );
};

export default CustomButton;
