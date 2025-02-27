import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the Tailwind CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="dark:bg-slate-900 dark:text-white">
    <App />
    </div>
  </React.StrictMode>
);