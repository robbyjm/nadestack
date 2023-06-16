import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";


const MyCard = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  function handleClick(e:React.MouseEvent) {
    setIsActive(current => !current);
  }
  return (
    <div className="row">
      <div className="col-sm-3 mb-3 mb-sm-0">
        <div className="card">
          <video controls src="nukeheaven.mp4" className="img-thumbnail" />
          <div className="card-body container">
            <div className="row"><h5 className="card-title col-sm-10">Heaven Smoke</h5>
            <i className={isActive ? "bi bi-bookmark-plus-fill col-sm-2" : "bi bi-bookmark-plus col-sm-2" } onClick={handleClick}></i>
            </div>
            <div className="row">
              <p className="card-text col-sm-12">some  text</p>
            </div>
          </div>
          <div className="card-footer text-muted">
            uploaded by @furnacetendie<i className="bi bi-0-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );

};

const Nav = (): JSX.Element => {
  return (
    <div className="container bg-primary">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="#" className="navbar-brand text-light">
            Nadestack
          </a>
        </div>
      </nav>
    </div>
  );
};

const Footer = (): JSX.Element => {
  return (
    <div className="container bg-body-tertiary border-top bg-primary">
      <div className="row">
        <div className="col-sm-4 text-light">
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
