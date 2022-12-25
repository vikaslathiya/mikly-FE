import { Color } from "@material-ui/core";
import { HIDE_TOAST, SHOW_TOAST } from "../Actions/ToastAction";

interface ToastReducer {
  type: string;
  payload: {
    message: String;
    severity?: Color | undefined;
  };
}

const initialState = {
  message: "",
  color: undefined,
};

export const ToastReducer = (state = initialState, action: ToastReducer) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        message: action.payload.message,
        color: action.payload.severity,
      };

    case HIDE_TOAST:
      return {
        message: "",
        color: undefined,
      };

    default:
      return state;
  }
};
