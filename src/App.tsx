import { PageLayout } from "./components/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import man_on_office from "@/assets/man_on_office.svg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/budget",
    element: <Budget />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
