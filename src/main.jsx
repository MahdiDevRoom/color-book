import { createRoot } from 'react-dom/client';

import App from '@/App';
import '@/styles/theme.css';
import '@/styles/shapes.css';
import '@/styles/typography.css';
import '@/styles/global.css';

const app = document.getElementById('app');

createRoot(app).render(<App/>);