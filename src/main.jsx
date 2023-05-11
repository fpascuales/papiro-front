import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />    
    </Provider>
  </Router>
);
