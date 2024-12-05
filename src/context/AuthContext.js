
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},  
  logout: () => {},
  register: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('userName');
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }    
  }, []);

  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  };

  const register = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    sessionStorage.clear();
  };

  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};