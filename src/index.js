import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider} from '@auth0/auth0-react';

const domain ="dev-bozemy7ycocb0r1z.us.auth0.com";
const clientId ="64c6EQDiPymMRmnlPBxDjXmZB6X1C3Jr";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
    domain={domain}
    clientId={clientId}
    redirectUri={"http://localhost:3000/profile"}
    >
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

