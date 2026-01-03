import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { createBrowserRouter, Outlet } from "react-router";

//Layot para definir o header em algumas paginas
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  //Header aparece na pagina home
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  },

  //Header nao aparece em login e register
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);
