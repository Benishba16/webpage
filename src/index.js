import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Twozo from "./twozo";
import {ThemeProvider} from "@mui/material";
import { LightTheme } from './styles/twozo';
import WebPage from './WebPage';
// import New from './New';
// import Grid from './grid';
// import Main from './main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={LightTheme}>
        {/* <New /> */}
        {/* <Main /> */}
        {/* <Grid /> */}
        <WebPage />
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
