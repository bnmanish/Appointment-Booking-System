import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;