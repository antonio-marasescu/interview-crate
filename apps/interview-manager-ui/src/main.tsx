import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { detectColorScheme } from '@interview-crate/fe/shared';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
detectColorScheme();

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
