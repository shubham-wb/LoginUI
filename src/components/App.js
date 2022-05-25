import "../assets/css/App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ValidateDoc, Register } from "./";
import { useContext } from "react";
import { AuthContext } from "../Provider/authProvider";

function App() {
  let userEmail = localStorage.getItem("email");
  userEmail = JSON.parse(userEmail);
  console.log(userEmail);
  const PrivateRoute = ({ children, ...rest }) => {
    return userEmail ? <Outlet /> : <Navigate to='/register'></Navigate>;
  };

  const LoggedInRoute = ({ children, ...rest }) => {
    return !userEmail ? (
      <Outlet />
    ) : (
      <Navigate to='/authentication=true/uid_validation'></Navigate>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route
            exact
            path='authentication=true/uid_validation'
            element={<ValidateDoc />}
          ></Route>
        </Route>

        <Route path='/' element={<LoggedInRoute />}>
          <Route exact path='/register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
