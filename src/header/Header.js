import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/kptechlab-logo.png'; // Make sure this path is correct
import { useAuth } from '../header/AuthContext'; // Ensure AuthContext is implemented
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clears token & state
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="50" height="50" className="me-2" />
          <span className="fs-4 fw-bold text-white" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
            KPTechLab
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/home">All Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/add">Add Product</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/signup">Signup Here</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Login Here</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
