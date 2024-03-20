import Dashboard from "@/pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Login from "./components/Login";
import Register from "./components/Register";
import { useAuth } from "./contexts/AuthContext.tsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { user } = useAuth();
  return (
    // <RouterProvider router={router} />;

    <Routes>
      {user && (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
      {!user && (
        <>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
