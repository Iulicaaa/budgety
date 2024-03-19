import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const defaultToken = localStorage.getItem("authToken");

function App() {
  const [token, setToken] = useState<string | null>(defaultToken);

  const updateToken = (token: string) => {
    setToken(token);
    localStorage.setItem("authToken", token);
  };

  return (
    // <RouterProvider router={router} />;

    <Routes>
      {token && (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
      {!token && (
        <>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={updateToken} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
