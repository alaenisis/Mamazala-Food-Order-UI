import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MenuCard = ({ title, price, image,addToCart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    if (location.pathname === '/') {
      navigate('/login');
    } else if(addToCart){
      addToCart(title, price);
    }
    }

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100" style={{ width: '250px' }}>
        <img 
          src={image} 
          alt={title} 
          className="card-img-top" 
          style={{ height: '150px', objectFit: 'cover' }} 
        />
        <div className="card-body d-flex flex-column justify-content-between text-center">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">R{price}</p>
          </div>
          <button className="btn btn-dark mt-3" onClick={handleButtonClick}>
            {location.pathname === '/' ? 'OrderNow' : 'Add to Cart'}
         </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
