import React, { Component } from "react";
import "./app.scss";

import Header from "./component/header";
import Headline from "./component/headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render" />
      </section>
    </div>
  );
}

export default App;
