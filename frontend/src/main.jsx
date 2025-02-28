import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the Tailwind CSS file
import AuthProvider from './Context/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="dark:bg-slate-900 dark:text-white">
    <App />
    </div>
    </AuthProvider>
  </React.StrictMode>
);