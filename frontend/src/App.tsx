import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Meetings from "./pages/Meetings";
import Home from "./front/Home";

import AdminLayout from "./pages/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />


      <Route path="/admin" element={ 
        <ProtectedRoute> 
          <AdminLayout /> 
        </ProtectedRoute> }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="meetings" element={<Meetings />} />
      </Route>
    </Routes>
  );
}

export default App;