import { Theme } from '@radix-ui/themes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ApiStatusProvider } from './context/apiStatus';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <ApiStatusProvider>
        <App />
      </ApiStatusProvider>
    </Theme>
  </StrictMode>
);
