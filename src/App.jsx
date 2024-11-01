// App.js
import React from "react";
import { SessionProvider, useSession } from "./context/SessionProvider.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
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
