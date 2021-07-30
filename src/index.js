import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react'

import { CLIENT_ID, DOMAIN } from './@common/config'
import App from './views/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <Auth0Provider
      domain={ DOMAIN }
      clientId={ CLIENT_ID }
      redirectUri={ window.location.origin }
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
