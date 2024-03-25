import React from "react";
import "./App.css";
import useLoacalStorage from "./LocalStorage";
function App() {
  const [theme, setTheme] = useLoacalStorage("theme", "dark");

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="container" data-theme={theme}>
      <div className="box">
        <h2>Hello World!</h2>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  );
}

export default App;
