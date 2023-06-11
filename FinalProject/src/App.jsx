import  useState  from "react";
import "./App.css";
import S1 from "./screens/S1";
import Login from "./screens/Login"
import Register from "./screens/Register";
import Pagos from "./screens/Pagos"
import Share from "./screens/Share"
import Singin from "./screens/Singin"
import Menu from  "./screens/Menu"
function app() {
  return (
    <div>
      {/*<S1 />*/}
      <Login/>
      {/* <Register/> */}
      {/* <Pagos/> */}
      {/* <Share/> */}
      {/* <Singin/> */}
      {/* <Menu/> */}
    </div>
  );
}

export default app;