import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { Footer } from "./components/Footer";

// const appendScripts = () => {
//   const script = document.createElement("script");
//   script.src = "../public/js/script.js";
//   script.async = false;
//   document.body.appendChild(script);
// };

function App() {
  // appendScripts();
  const routes = useRoutes();

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>{routes}</Router>
      <Footer />
    </>
  );
}

export default App;
