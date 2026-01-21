import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  const login = (username, userRole) => {
    setIsLoggedIn(true);
    setUser(username);
    setRole(userRole);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
