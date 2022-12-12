import "./App.css";
import Header from "./pages/Header";
import Feed from "./pages/Feed";
import Sidebar from "./pages/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import {Provider, useDispatch} from 'react-redux';
import Login from "./components/Login";

function App() {
  // const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      
      {/* {!user ? ( */}
        {/* <Login /> */}
      {/* ) : ( */}
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      {/* )} */}
    </div>
  );
}

export default App;
