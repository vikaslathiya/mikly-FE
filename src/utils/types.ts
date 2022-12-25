import { Color } from "@material-ui/core";

export interface IRedux {
  Auth: IAuthReducer;
  Toast: IToastReducer;
}

interface IAuthReducer {
  loading: boolean;
  isLogin: boolean;
}

interface IToastReducer {
  message: string;
  color?: "error" | "info" | "success" | "warning" | undefined;
}
