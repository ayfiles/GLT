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

// simple client-side navigation helper for internal links
(window as any).navigate = (to: string) => {
  if (window.location.pathname !== to) {
    window.history.pushState({}, '', to);
    render();
  }
};

// Intercept clicks on internal links for SPA-style navigation
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null;
  if (!target) return;
  const link = target.closest('a');
  if (!link) return;
  const url = new URL(link.href, window.location.origin);
  const isSameOrigin = url.origin === window.location.origin;
  if (!isSameOrigin) return;
  const pathname = url.pathname.toLowerCase();
  if (['/impressum', '/datenschutz', '/agb', '/'].includes(pathname)) {
    event.preventDefault();
    (window as any).navigate(pathname);
  }
}, true);
render();
