import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "../css/front-layout.css";

function FrontLayout() {
  return (
    <div className="front-layout">
      <Header />

      <main className="front-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default FrontLayout;