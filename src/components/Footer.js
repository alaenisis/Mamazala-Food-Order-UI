import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Mamazala</h5>
            <small>© Copyright - Mamazala</small>
          </div>
          <div className="col-md-3">
            <h5>Food</h5>
            <ul className="list-unstyled">
              <li>Menu</li>
              <li>Ways to order</li>
              <li>Delivery</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Amazing Story</h5>
            <ul className="list-unstyled">
              <li>Our Story</li>
              <li>Our History</li>
              <li>News</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Let's Talk</h5>
            <ul className="list-unstyled">
              <li>Customer Care</li>
              <li>Where are we</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
