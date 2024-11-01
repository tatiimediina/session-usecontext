import React, { createContext, useState, useContext, useEffect } from "react";
import {
  loginRequest,
  logoutRequest,
  checkSessionRequest,
} from "../api/auth.js";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginRequest(credentials);
      await checkSession(); // Verifica y actualiza la sesión después del login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      setUser(null); // Limpia el estado del usuario
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const checkSession = async () => {
    setLoading(true);
    try {
      const data = await checkSessionRequest();
      setUser(data ? data.user : null); // Actualiza el usuario en el estado
    } catch (error) {
      console.error("Error al verificar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkSession(); // Verifica la sesión al cargar la aplicación
  }, []);

  return (
    <SessionContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
