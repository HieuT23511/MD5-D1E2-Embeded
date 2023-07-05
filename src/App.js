import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    const name = "Hello World";
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        // React.createElement("h1", { style: { textAlign: "center" } }, name)
        <h1 style={{textAlign: "center"}}> {name}</h1>
    );
}

export default App;
