import "../assets/css/App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ValidateDoc, Register } from "./";

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
          <Route exact path='/' element={<ValidateDoc />}></Route>
        </Route>

        <Route path='/' element={<LoggedInRoute />}>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/' element={<Register />}></Route>
        </Route>

        <Route exact path='*' element={<div>Error 404 not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
