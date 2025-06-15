import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EntityList from './components/EntityList';
import AddEntity from './components/AddEntity';
import EditEntity from './components/EditEntity';
import Header from './header/Header';
import Signup from './components/Signup';
import Login from './components/Login'; // Ensure this import is correct


function App() {
  return (
    <Router>
      <Header /> {/* ✅ Now used */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<AddEntity />} />
          <Route path="/edit/:id" element={<EditEntity />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<EntityList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
