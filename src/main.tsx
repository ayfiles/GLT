import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Impressum from './routes/Impressum';
import Datenschutz from './routes/Datenschutz';
import AGB from './routes/AGB';
import './index.css';

const root = createRoot(document.getElementById('root')!);

function render() {
  const path = window.location.pathname.toLowerCase();
  const isImpressum = path === '/impressum';
  const isDatenschutz = path === '/datenschutz';
  const isAGB = path === '/agb';
  root.render(
    <StrictMode>
      {isImpressum ? <Impressum /> : isDatenschutz ? <Datenschutz /> : isAGB ? <AGB /> : <App />}
    </StrictMode>
  );
}

window.addEventListener('popstate', render);
render();
