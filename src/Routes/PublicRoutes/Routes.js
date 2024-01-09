import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment";
import Reviews from "../../Pages/Reviews/Reviews";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Registration from "../../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
//import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../layouts/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";

const routs = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
    ],
  },
]);

export default routs;
