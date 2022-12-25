import { Color } from "@material-ui/core";

export const SHOW_TOAST = "SHOW_TOAST";
export const HIDE_TOAST = "HIDE_TOAST";

interface ToastAction {
  message: String;
  severity?: Color | undefined;
}

export const ToastAction = (data: ToastAction) => {
  return {
    type: SHOW_TOAST,
    payload: data,
  };
};

export const HideToastAction = () => {
  return {
    type: HIDE_TOAST,
  };
};
