import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Impressum from './routes/Impressum';
import './index.css';

const root = createRoot(document.getElementById('root')!);

function render() {
  const path = window.location.pathname;
  const isImpressum = path.toLowerCase() === '/impressum';
  root.render(
    <StrictMode>
      {isImpressum ? <Impressum /> : <App />}
    </StrictMode>
  );
}

window.addEventListener('popstate', render);
render();
