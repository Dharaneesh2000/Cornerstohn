import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login';
import AdminSidebar from './Admin/Sidebar'
import PatientLogin from "./Login/PatientLogin";
import PatientReg from "./Patient/PatientReg";
import Practices from "./Admin/AdminPractice";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sidebar" element={<AdminSidebar />} />
        <Route path="/adminPractices" element={<Practices />} />
        <Route path="/patientLogin" element={<PatientLogin />} />
        <Route path="/patientReg" element={<PatientReg />} />
      </Routes>
    </Router>
  );
}

export default App;
