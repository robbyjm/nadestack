import React from "react";
import logo from "./logo.svg";
import "./App.css";

const MyCard = (): JSX.Element => {
  return (
    <div className="row">
      <div className="col-sm-3 mb-3 mb-sm-0">
        <div className="card">
          <video controls src="nukeheaven.mp4" className="img-thumbnail" />
          <div className="card-body">
            <h5 className="card-title">Card else</h5>
            <p className="card-text">some text</p>
            <a href="#" className="btn btn-primary">
              go somewhere
            </a>
            <a href="#" className="btn btn-primary">
              favorite
            </a>
          </div>
          <div className="card-footer text-muted">
            uploaded by @furnacetendie
          </div>
        </div>
      </div>
    </div>
  );
};

const Nav = (): JSX.Element => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Nadestack
          </a>
        </div>
      </nav>
    </div>
  );
};

const Footer = (): JSX.Element => {
  return (
    <div className="container bg-body-tertiary border-top">
      <div className="row">
        <div className="col-sm-4">
          nadestack.gg
        </div>
      </div>
    </div>
  )
}

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <MyCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
