import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login';
import AdminSidebar from './Admin/Sidebar'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sidebar" element={<AdminSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
