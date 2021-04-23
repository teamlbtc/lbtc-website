import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/css/revolution/layers.scss';
import './assets/css/revolution/navigation.scss';


import './assets/css/revolution/fonts/font-awesome/css/font-awesome.scss';
import './assets/css/revolution/fonts/font-awesome/css/font-awesome.min.scss';
import './assets/css/revolution/fonts/pe-icon-7-stroke/css/helper.scss';
import './assets/css/revolution/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.scss';

import './assets/css/revolution/navigation-skins/ares.scss';
import './assets/css/revolution/navigation-skins/custom.scss';
import './assets/css/revolution/navigation-skins/dione.scss';
import './assets/css/revolution/navigation-skins/erinyen.scss';
import './assets/css/revolution/navigation-skins/gyges.scss';
import './assets/css/revolution/navigation-skins/hades.scss';
import './assets/css/revolution/navigation-skins/hebe.scss';
import './assets/css/revolution/navigation-skins/hephaistos.scss';
import './assets/css/revolution/navigation-skins/hermes.scss';
import './assets/css/revolution/navigation-skins/hesperiden.scss';
import './assets/css/revolution/navigation-skins/metis.scss';
import './assets/css/revolution/navigation-skins/persephone.scss';
import './assets/css/revolution/navigation-skins/uranus.scss';
import './assets/css/revolution/navigation-skins/zeus.scss';



import './assets/css/style.scss';
import './assets/css/owl.carousel.min.scss';
import './assets/css/slick.scss';
import './assets/css/responsive.scss';
import './assets/css/color.scss';
import './assets/css/animate.min.scss';
import './assets/css/bootstrap.min.scss';
import './assets/css/bootstrap-select.min.scss';
import './assets/css/fancybox.min.scss';
import './assets/css/icons.min.scss';
import './assets/css/perfect-scrollbar.scss';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <App></App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
