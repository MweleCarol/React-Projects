import { createRoot } from 'react-dom/client';
import ContextProvider from './context/context';
import App from './App.jsx';
import './index.css';



createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App>

    </App>
  </ContextProvider>
);
