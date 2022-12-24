export interface IRedux {
  Auth: IAuthReducer;
}

interface IAuthReducer {
  loading: boolean;
}
