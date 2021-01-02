import "./App.css";
import "materialize-css";
import { useRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";

function App() {
  const { token, userId, logout, login } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{token, login, logout, isAuthenticated, userId}}>
      <BrowserRouter>
      {isAuthenticated && <Navbar/>}
        <div className="container">{routes}</div>;
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
