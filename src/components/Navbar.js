import React, { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import {AuthContext} from '../context/AuthContext';

const Navbar = () => {

  const {isLoggedIn, user, logout} = useContext(AuthContext);

  const navigate = useNavigate();

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = sessionStorage.getItem('userName');
    if (isLoggedIn&& user) {
      setUserName(user.name);
    } else if (storedUserName) {
      setUserName(storedUserName);
    } 
    else {
      setUserName('');
    }
  }, [isLoggedIn, user]);

  const handleLogout = () => {
    
    sessionStorage.clear();
    logout();
    navigate('/');
  };

  const handleScrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'instant' });
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        { userName ? (
          <>
            <Link className="navbar-brand" to="/">Mamazala</Link>
            <div className="user-info">
              Welcome, <span id="userName">{userName}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <Link className="navbar-brand" to="/">Mother M</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/" onClick={() => handleScrollToSection('Home')}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/#about" onClick={() => handleScrollToSection('about')}>About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/#menu" onClick={() => handleScrollToSection('menu')}>Menu</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/#feedback" onClick={() => handleScrollToSection('feedback')}>Feedback</Link></li>
                <li className="nav-item"><Link className="btn btn-success mx-2" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="btn btn-success" to="/register">Register</Link></li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;


