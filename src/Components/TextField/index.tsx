import React, { Fragment } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import "./style.css";

const CustomTextField = (props: any) => {
  const {
    label,
    onchange,
    name,
    fullWidth,
    autoFocus,
    variant,
    type,
    defaultValue,
    value,
    startIcon,
    endIcon,
    helperText,
    error,
    inputProps,
  } = props;

  return (
    <Fragment>
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        variant={variant}
        onChange={onchange}
        classes={{ root: "input-field" }}
        fullWidth={fullWidth}
        autoFocus={autoFocus}
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : (
            <></>
          ),
          endAdornment: endIcon ? (
            <InputAdornment position="start">{endIcon}</InputAdornment>
          ) : (
            <></>
          ),
        }}
        inputProps={inputProps}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Fragment>
  );
};

export default CustomTextField;
