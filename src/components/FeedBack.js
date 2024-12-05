import React from 'react';

const Feedback = () => {
  return (
    <section id="feedback" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">Feedback</h2>
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control" 
                  rows="3" 
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-1by1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.998618871715!2d28.03251237462429!3d-26.145501661584326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c91ef348e77%3A0x50b6618f56dc267e!2s191%20Jan%20Smuts%20Ave%2C%20Johannesburg%2C%20Randburg%2C%202193!5e1!3m2!1sen!2sza!4v1729852679065!5m2!1sen!2sza"
                className="embed-responsive-item"
                style={{ width: '100%', height: '400px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
