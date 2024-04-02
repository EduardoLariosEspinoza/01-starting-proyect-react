// Se usa para renderizar el documento
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");

// Inyecta el componente de react en el entryPoint creando un root
ReactDOM.createRoot(entryPoint).render(<App />);
