import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ReactGA from "react-ga4";
import './index.css'
// imported after index.css so the page styles win the cascade on ties
import './styles/tidal.css'

ReactGA.initialize("G-XEESRTQ5LS");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
