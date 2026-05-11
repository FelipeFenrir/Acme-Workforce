import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Importe o CSS global se quiser que o MFE herde os estilos
import 'ui'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
