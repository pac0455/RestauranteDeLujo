import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Palabra del chef" />
      <h1 className="headtext__cormorant">Lo que creemos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">La cocina es un lienzo donde la pasión se mezcla con la creatividad, donde los ingredientes se convierten en pinceladas de sabor y aroma que narran historias de tradición y vanguardia. Cada plato es una expresión única, un reflejo del amor y dedicación del chef que lo prepara, llevando consigo el alma de la cocina y la promesa de deleitar los sentidos de quienes tienen el placer de probarlo.</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
