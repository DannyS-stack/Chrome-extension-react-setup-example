import React from "react";

function App() {
  const styles = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "300px",
    height: "100vh",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #c2c2c2",
    zIndex: 9999,
  };

  return (
    <div style={styles}>
      <header>
        <h5>Hello From React App</h5>
      </header>
    </div>
  );
}

export default App;
