import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import HabitDashboard from "./Dashboard";
import Navbar from "./Navbar";

function App() {
  return (

    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<HabitDashboard />} />
      {/* 404 */}
      <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h1>} />

    </Routes>

  );
}

export default App;