import React from "react";
import logo from "./logo.svg";
import "./App.css";

const MyCard = (): JSX.Element => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">some text</p>
        <a href="#" className="btn btn-primary">
          go somewhere
        </a>
        <a href="#" className="btn btn-primary">
          favorite
        </a>
      </div>
    </div>
  );
};

const Nav = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Nadestack
        </a>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Nav />
      <MyCard />
    </div>
  );
}

export default App;
