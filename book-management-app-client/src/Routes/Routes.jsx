import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard/AdminDashboard";
import AddBook from "../Pages/AdminDashboard/AddBook/AddBook";
import UpdateBook from "../Pages/AdminDashboard/UpdateBook/UpdateBook";
import ManageBooks from "../Pages/AdminDashboard/ManageBooks/ManageBooks";
import Users from "../Pages/AdminDashboard/Users/Users";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blogs",
                element: <Blog />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/singup",
                element: <Singup />
            },
        ]
    },
    {
        path: "/",
        element: <DashboardLayouts />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />
            },
            {
                path: "addBook",
                element: <AddBook />,
            },
            {
                path: "updateBook/:id",
                element: <UpdateBook />,
            },
            {
                path: "manageBooks",
                element: <ManageBooks />,
            },
            {
                path: "users",
                element: <Users />,
            },
        ]
    }
])