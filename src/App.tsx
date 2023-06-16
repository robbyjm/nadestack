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
      <div className="col-md-4 col-sm-6 col-xs-6 mb-3 mb-sm-0">
        <div className="card">
          <video controls src="nukeheaven.mp4" className="img-thumbnail" />
          <div className="card-body container">
            <div className="row">
              <h5 className="card-title col-10">Heaven Smoke</h5>
              <i className={isActive ? "bi bi-bookmark-plus-fill col-1" : "bi bi-bookmark-plus col-1" } onClick={handleClick}></i>
            </div>
            <div className="row">
              <p className="card-text col-sm-12">some  text</p>
            </div>
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
      <header className="bg-primary navbar navbar-expand-lg bd-gutter">
        <nav className="container-xxl">
          <a href="#" className="navbar-brand text-light">
            Nadestack
          </a>
        </nav>
      </header>
  );
};

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-light border-top">
      <div className="container-xxl">
      <div className="row">
        <div className="col-sm-4">
          nadestack.gg
        </div>
      </div>
      </div>
    </footer>
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
