import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface thaVideo {
  video: string
}

const MyCard = ({ video }: thaVideo): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  function handleClick(e: React.MouseEvent) {
    setIsActive(current => !current);
  }
  return (
    <div className='row'>
      <div className="col-md-4 col-sm-6 col-xs-6 mb-3 mb-sm-0">
        <div className="card">
          <video controls src={`http://localhost:4000/s3/${video}`} className="img-thumbnail myVideo" />

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

const Body = (props: any): JSX.Element => {
  return (
    <section className="container"><Card data={props.data}/></section>
  )
}

const Card = (props: any): JSX.Element => {
  const cards = props.data.map((entry: any) => (
    <div className="card"><CardBody data={entry} /><CardFooter data={entry}/></div>
  ))
  return (
    cards
  )
}

const CardBody = (props: any): JSX.Element => {
  const [isActive, setIsActive] = useState(false)
  function handleClick(e: React.MouseEvent) {
    setIsActive(current => !current)
  }
  return (
    <div className="card-body container">
      <div className="row">
        <h5 className="card-title col-10">{props.data.title}</h5>
        <i className={isActive ? "bi bi-bookmark-plus-fill col-1" : "bi bi-bookmark-plus col-1"} onClick={handleClick}></i>
      </div>
      <div className="row">
        <p className="card-text col-sm-12">{props.data.description}</p>
      </div>
    </div>
  )
}

const CardFooter = (props: any): JSX.Element => {
  return (
    <div className="card-footer text-muted">
      uploaded by @furnacetendie
    </div>
  )
}

interface mockData {
  thumbnail: string,
  title: string,
  description: string,
  username: string
}

function App(): JSX.Element {
  const data: mockData[] = [{"thumbnail":"300x300.gif","title":"Zontrax","username":"faveray0","description":"sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam"},
  {"thumbnail":"300x300.gif","title":"Tresom","username":"mdufoure1","description":"sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit"},
  {"thumbnail":"300x300.gif","title":"Subin","username":"tfricke2","description":"volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas"},
  {"thumbnail":"300x300.gif","title":"Voyatouch","username":"hlow3","description":"dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum"},
  {"thumbnail":"300x300.gif","title":"Quo Lux","username":"kesby4","description":"faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor"},
  {"thumbnail":"300x300.gif","title":"Toughjoyfax","username":"ctwinborne5","description":"faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio"},
  {"thumbnail":"300x300.gif","title":"Daltfresh","username":"hyemm6","description":"risus dapibus augue vel accumsan tellus nisi eu orci mauris"},
  {"thumbnail":"300x300.gif","title":"Keylex","username":"cgarred7","description":"integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl"},
  {"thumbnail":"300x300.gif","title":"Greenlam","username":"jmalatalant8","description":"tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed"},
  {"thumbnail":"300x300.gif","title":"Tres-Zap","username":"hrounce9","description":"vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra"},
  {"thumbnail":"300x300.gif","title":"Zamit","username":"nbeara","description":"fermentum donec ut mauris eget massa tempor convallis nulla neque libero"},
  {"thumbnail":"300x300.gif","title":"Hatity","username":"jgastickeb","description":"posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros"},
  {"thumbnail":"300x300.gif","title":"Temp","username":"rparamorec","description":"diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus"},
  {"thumbnail":"300x300.gif","title":"Subin","username":"gtrubshawd","description":"euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis"},
  {"thumbnail":"300x300.gif","title":"Trippledex","username":"rbudleighe","description":"quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in"},
  {"thumbnail":"300x300.gif","title":"Tampflex","username":"lhenlonf","description":"hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem"},
  {"thumbnail":"300x300.gif","title":"Biodex","username":"zattridgeg","description":"orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu"},
  {"thumbnail":"300x300.gif","title":"Stim","username":"gstrettonh","description":"duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a"},
  {"thumbnail":"300x300.gif","title":"Trippledex","username":"zoreti","description":"suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris"},
  {"thumbnail":"300x300.gif","title":"Stronghold","username":"lgirardettij","description":"nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede"}]
  return (
    <div className="App">
      <Nav />
      <Body data={data} />
      <Footer />
    </div>
  );
}

export default App;
