import React, { useState } from "react";
import { useSession } from "../context/SessionProvider.jsx";
import { Button } from "../components/Button.jsx";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login, loading, error } = useSession();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="flex flex-col items-center gap-4 ">
      <h2 className="text-3xl font-bold">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={credentials.username}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:border-indigo-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:border-indigo-400"
        />
        <Button
          texto={loading ? "Cargando..." : "Iniciar Sesión"}
          accion={handleSubmit}
          disabled={loading}
        />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
