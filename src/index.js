import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@mui/material";
import theme from "./app/config/theme";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <ToastContainer/>
              <App/>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
