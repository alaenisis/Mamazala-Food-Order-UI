import React from 'react';
import MenuCard from '../components/MenuCard';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Feedback from '../components/FeedBack';



const IndexPage = () => {
  return (
    <div>
        <section id='Home'>
            <div className="container-fluid p-0">
              <Hero />
            </div>
        </section>

        <section id="about" className="py-5 bg-light">
          <div className="container">
            
            <AboutUs />
          </div> 
        </section>  

      <section id="menu" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Menu</h2>
          <div className="row">
            <MenuCard title="Steak & Pap" price="59.99" image={require("../assets/img/steak.jfif")}/>

            <MenuCard title="Chicken & Chips" price="49.99" image={require("../assets/img/chips.jfif")} />

            <MenuCard title="Pap & Chicken" price="49.99" image={require("../assets/img/PapANdChicken.jpg")} />

            <MenuCard title="Beef Stew" price="49.99" image={require("../assets/img/Beef-Stew-.jpg")} />

            <MenuCard title="Wors" price="49.99" image={require("../assets/img/wors.jfif")} />

            <MenuCard title="Chips" price="49.99" image={require("../assets/img/chips.jfif")} />
          </div>
        </div>
      </section>
      
      <section id="feedback" className="py-5 bg-light">
          <div className="container">
            
            <Feedback />
          </div> 
      </section>
    </div>
  );
};

export default IndexPage;
