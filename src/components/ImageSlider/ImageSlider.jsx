import React from 'react';
import Carousel, {  autoplayPlugin  } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './1.jpg'
import imageTwo from './2.jpg'
import imageThree from './3.jpg'
import imageFour from './4.jpg'
import imageFive from './5.jpg'
import imageSix from './6.jpg'
import imageSeven from './7.jpg'
import imageEight from './8.jpg'
import imagenine from './9.jpg'
import imageten from './10.jpg'


const ImageSlider = () => (
  
  <Carousel plugins={[
    'arrows',
    'infinite',
    {
      resolve: autoplayPlugin,
      options: {
        interval: 1700,
      }
    },
  ]}>
    <img src={imageOne} />
    <img src={imageTwo} />
    <img src={imageThree} />
    <img src={imageFour} />
    <img src={imageFive} />
    <img src={imageSix} />
    <img src={imageSeven} />
    <img src={imageEight} />
    <img src={imagenine} />
    <img src={imageten} />
  </Carousel>
);

export default ImageSlider;