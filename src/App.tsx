import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    // <RouterProvider router={router} />;

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
