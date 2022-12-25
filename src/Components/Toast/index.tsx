import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Color } from "@material-ui/lab";
import { useDispatch } from "react-redux";
import { HideToastAction } from "../../Redux/Actions/ToastAction";
import Slide, { SlideProps } from "@material-ui/core/Slide";

type TransitionProps = Omit<SlideProps, "direction">;

interface ToastProps {
  message: string;
  severity?: Color | undefined;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props: ToastProps) {
  const { message, severity } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (severity && message !== "") {
      handleClick();
    }

    return () => {
      setTimeout(() => {
        dispatch(HideToastAction());
      }, 3000);
    };
  }, [message, severity]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
