import React from 'react';
import { useNavigate } from 'react-router-dom';
import  chicken from '../assets/img/chicken.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center bg-dark text-white"
      style={{
        backgroundImage: `url(${chicken})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '700px',
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Mamazala</h1>
        <p className="lead">
          Enjoy delicious and freshly prepared meals that bring the authentic flavors of traditional cuisine right to your table.
        </p>
        <button className="btn btn-danger btn-lg mt-3" onClick={handleButtonClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hero;

