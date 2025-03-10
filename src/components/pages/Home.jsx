import React from 'react';
import Pricing from '../comp/Pricing';
import Ainnov from '../comp/Ainnov';
import Portfolio from '../comp/Portfolio';
import Services from './Services';
import Contact from './Contact';
import Herosection from '../comp/Herosection';

const Home = () => {
  return (
    <div>
      <div id="hero">
        <Herosection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="innovations">
        <Ainnov />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
