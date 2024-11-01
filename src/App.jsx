import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import DashboardPage from "./pages/dashboard";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

const Home = () => (
  <div>
    <h1 className="flex justify-center mb-3">Halaman Utama</h1>
    <nav className="flex justify-center gap-4">
      <Link to="/login" className="bg-blue-400 py-2 px-5">
        Login
      </Link>
      <Link to="/register" className="bg-green-400 py-2 px-5">
        Register
      </Link>
    </nav>
  </div>
);

export default App;