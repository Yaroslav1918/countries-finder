import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './components/Spinner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

