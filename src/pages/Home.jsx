import React from "react";
import { useSession } from "../context/SessionProvider.jsx";
import { Button } from "../components/Button.jsx";
const Home = () => {
  const { user, logout } = useSession();

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold">Bienvenido, {user.username}</h2>
      <p className="font-semibold text-base text-center my-4 text-indigo-500">
        ¿Como te sentís hoy?
      </p>
      <Button accion={logout} texto="Cerrar Sesión" />
    </div>
  );
};

export default Home;
