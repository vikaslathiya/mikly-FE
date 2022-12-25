import { useSelector } from "react-redux";
import "./App.css";
import CustomizedSnackbars from "./Components/Toast";
import Routes from "./Routes";
import { IRedux } from "./utils/types";

function App() {
  const ToastState = useSelector((state: IRedux) => state.Toast);
  console.log("ToastState", ToastState);

  return (
    <div className="App">
      <CustomizedSnackbars
        message={ToastState.message}
        severity={ToastState.color}
      />

      <Routes />
    </div>
  );
}

export default App;
