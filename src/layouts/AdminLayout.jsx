import React from "react";
import AdminHeader from "../components/admin/header/AdminHeader";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./../components/admin/sidebar/AdminSidebar";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="w-full">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
