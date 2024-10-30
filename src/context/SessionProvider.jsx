// SessionContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        credentials: "include", // Importante para enviar y recibir cookies
      });

      if (!response.ok) throw new Error("Credenciales incorrectas");

      const data = await response.json();
      await checkSession(); // Verifica y actualiza la sesión después del login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("http://localhost:4000/auth/sign-out", {
        method: "POST",
        credentials: "include", // Incluye cookies en la solicitud
      });
      setUser(null); // Limpia el estado del usuario
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const checkSession = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/auth/session", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user); // Actualiza el usuario en el estado
      } else {
        setUser(null);
      }
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
