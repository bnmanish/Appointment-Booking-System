import { Routes, Route } from "react-router-dom";

import Login from "./front/Login";
import SignUp from "./front/SignUp";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Meetings from "./pages/Meetings";
import Home from "./front/Home";
import About from "./front/About";
import Contact from "./front/Contact";

import AdminLayout from "./pages/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import FrontLayout from "./front/FrontLayout";


function App() {
  return (
    <Routes>
      {/* public routes starts */}
      <Route path="/" element={<FrontLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      {/* public routes ends */}
      
      {/* Auth/admin routes starts */}
      <Route path="/admin" element={ 
        <ProtectedRoute> 
          <AdminLayout /> 
        </ProtectedRoute> }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="meetings" element={<Meetings />} />
      </Route>
      {/* Auth/admin routes ends */}
    </Routes>
  );
}

export default App;