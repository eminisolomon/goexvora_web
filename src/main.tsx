import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { Toast } from '@/components/Toast';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <Toast />
    </HelmetProvider>
  </StrictMode>,
);
