// App.js
import React from "react";
import { SessionProvider, useSession } from "./context/SessionProvider.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

const AppContent = () => {
  const { user } = useSession();

  return user ? <Home /> : <Login />;
};

const App = () => (
  <SessionProvider>
    <AppContent />
  </SessionProvider>
);

export default App;
