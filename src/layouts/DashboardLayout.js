import React, { useContext } from "react";
import Header from "../Pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard">Appointments</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-doctors">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-doctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
