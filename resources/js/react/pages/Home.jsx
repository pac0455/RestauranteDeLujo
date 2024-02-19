import React, { useEffect } from 'react';


import {AboutUs,Chef,FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from '../pages';
import '../App.css';

const Home = () => {
  

  return (
    <div>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
    </div>
  );
};



export default Home;
