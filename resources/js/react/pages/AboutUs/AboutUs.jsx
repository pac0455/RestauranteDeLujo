import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Con una fusión de sabores innovadores y técnicas culinarias tradicionales, nuestra cocina es un tributo a la diversidad y la riqueza de la gastronomía</p>
        <button type="button" className="custom__button">Saber más</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">A lo largo de los años, hemos crecido y evolucionado, pero nuestros valores fundamentales nunca han cambiado.</p>
        <button type="button" className="custom__button">Saber más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
