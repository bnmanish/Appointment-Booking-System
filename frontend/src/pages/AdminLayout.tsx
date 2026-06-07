import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "../admin-layout.css";

function AdminLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-section">
        <Header />

        <main className="content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;