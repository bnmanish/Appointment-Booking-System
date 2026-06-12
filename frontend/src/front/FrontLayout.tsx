import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "../css/front-layout.css";

function FrontLayout() {
  return (
    <div className="layout">

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

export default FrontLayout;