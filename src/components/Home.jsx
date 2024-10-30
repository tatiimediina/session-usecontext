// Home.js
import React from "react";
import { useSession } from "../context/SessionProvider.jsx";

const Home = () => {
  const { user, logout } = useSession();

  return (
    <div>
      <h2>Bienvenido, {user.username}</h2>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
