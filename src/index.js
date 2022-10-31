import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from "@mui/material";
import { LightTheme } from './styles/twozo';
import WebPage from './WebPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={LightTheme}>
        <WebPage />
    </ThemeProvider>
);
