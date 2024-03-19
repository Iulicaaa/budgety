import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
