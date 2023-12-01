import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './app';
import './styles.css';
import 'normalize.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'animate.css';
import './app/assets/brandTransition.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root') as Element).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
