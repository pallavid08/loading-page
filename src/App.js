import "./styles.css";
import Page1 from "./Page1";
import React, { useState, useEffect } from "react";

export default function App() {
  const [home, setHome] = useState("../atom-symbol.png");

  useEffect(() => {
    setTimeout(() => {
      setHome();
    }, 5000);
  }, []);

  return (
    <div className="App">
      {home ? (
        <div>
          <img src={home} alt={home} />
          <h1>Loading Page</h1>
        </div>
      ) : (
        <Page1 />
      )}
    </div>
  );
}
