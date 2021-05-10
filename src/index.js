import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "./context/Datacontext";
import { ProductDataProvider } from "./context/Productcontext";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <ProductDataProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ProductDataProvider>
    </Router>
  </StrictMode>,
  rootElement
);