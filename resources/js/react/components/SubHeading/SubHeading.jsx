import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div className='mb-5 '>
    <p className="p__cormorant  lg:text-6xl sm:text-xl md:text-5xl">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
