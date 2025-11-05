import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Impressum from './routes/Impressum';
import Datenschutz from './routes/Datenschutz';
import AGB from './routes/AGB';
import './index.css';

const root = createRoot(document.getElementById('root')!);

function render() {
  const route = (window.location.hash || '#/').toLowerCase();
  const isImpressum = route === '#/impressum';
  const isDatenschutz = route === '#/datenschutz';
  const isAGB = route === '#/agb';
  root.render(
    <StrictMode>
      {isImpressum ? <Impressum /> : isDatenschutz ? <Datenschutz /> : isAGB ? <AGB /> : <App />}
    </StrictMode>
  );
}

window.addEventListener('hashchange', render);

// Hash-based navigation helper
(window as any).navigate = (to: string) => {
  const target = to.startsWith('#') ? to : `#${to.startsWith('/') ? to : `/${to}`}`;
  if (window.location.hash !== target) {
    window.location.hash = target; // triggers render via hashchange
  }
};

render();
