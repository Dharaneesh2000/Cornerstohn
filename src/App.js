import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

//------------------------[Home login]------------------------------------------------------------------
import Login from './Login/Login';
//------------------------[Home login end]---------------------------------------------------------------

// -------------------------[ Admin pages start ]------------------------------------------------------------
import AdminSidebar from './Admin/Sidebar';
import AdminHeader from "./Admin/AdminHeader";
import PatientLogin from "./Login/PatientLogin";
import Practices from "./Admin/AdminPractice";
import ChangePassword from "./Admin/AdminChangePassword";
import Forms from "./Admin/AdminForms";
import Uploads from "./Admin/AdminUploads";
import Empoloyees from "./Admin/AdminEmployees";
// -------------------------[ Admin pages end ]------------------------------------------------------------


// -------------------------[ patient pages start ]------------------------------------------------------------
import PatientReg from "./Patient/PatientReg";
// -------------------------[ patient pages end ]------------------------------------------------------------

function App() {
  return (
    <Router>
      <Routes>
        {/* ------------------------[Home login]---------------------------- */}
        <Route path="/" element={<Login />} />
        {/* ------------------------[Home login end]---------------------------- */}
        
        {/*  -------------------------[ Admin pages start ]------------------------------- */}
        <Route path="/Sidebar" element={<AdminSidebar />} />
        <Route path="/adminHeader" element={<AdminHeader/>} />
        <Route path="/adminPractices" element={<Practices />} />
        <Route path="/adminChangePassword" element={<ChangePassword />} />
        <Route path="/adminForms" element={<Forms />} />
        <Route path="/adminUploads" element={<Uploads />} />
        <Route path="/adminEmpoloyees" element={<Empoloyees />} />
        {/*  -------------------------[ Admin pages end ]------------------------------- */}

        {/* -------------------------[ patient pages start ]------------------------------------ */}
        <Route path="/patientLogin" element={<PatientLogin />} />
        <Route path="/patientReg" element={<PatientReg />} />
        {/* -------------------------[ patient pages end ]------------------------------------ */}
      </Routes>
    </Router>
  );
}

export default App;
