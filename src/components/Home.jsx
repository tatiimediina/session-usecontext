// Home.js
import React from "react";
import { useSession } from "../context/SessionProvider.jsx";

const Home = () => {
  const { user, logout } = useSession();

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold">Bienvenido, {user.username}</h2>
      <button
        onClick={logout}
        className="mt-20 bg-indigo-300 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Home;
