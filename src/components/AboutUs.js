import React, { useState } from 'react';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img 
              src={require("../assets/img/FoodTrailer.jpg")} 
              alt="Food Truck" 
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p className="lead">
              At Ku Mamazala Food, we bring the comfort of home-cooked meals straight to you. 
              Our food trailer is more than just a place to grab a bite—it’s...
              {showMore && (
                <span>
                  a place where you can indulge in delicious food that is made with love and care. 
                  Our menu is inspired by traditional African dishes, with a modern twist to suit the taste of our customers. 
                  We source our ingredients from local farmers to ensure that our food is fresh and of the highest quality. 
                  We are committed to providing an exceptional customer experience, and we strive to make every interaction with us a memorable one.
                </span>
              )}
            </p>
            <button className="btn btn-warning" onClick={toggleShowMore}>
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

