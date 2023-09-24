import App from "./components/app/App";
import store from "./components/store";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./components/styles/index.css";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
