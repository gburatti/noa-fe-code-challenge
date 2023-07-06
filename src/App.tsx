import React from 'react';
import logo from './assets/noaLogo.png';

function App() {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", justifyContent: "center", alignItems: "center"
    }}>
      <div id="placeholder" style={{padding: 20, textAlign: "center"}}>
        <img alt="logo" src={logo} style={{maxWidth: "100px"}}/>
        <h4 style={{textTransform: "uppercase"}}>
          Frontend code challenge
        </h4>
        <p>
          Remove this placeholder and start building!<br/>
          All the instructions are in the readme file.
        </p>
      </div>
    </div>
  );
}

export default App;
