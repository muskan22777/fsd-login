import { useContext } from "react";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Dashboard /> : <Login />;
};

export default App;
