import React, { Component } from 'react';
import edificio1 from './edificio1.png';
import edificio2 from './edificio2.png';
import './App.css';

class App extends Component {
  render() {
    return (<div><Header/><Content/></div>);
  }
}
class Header extends Component{
  render(){
    return(
      <nav>
        <a href="#" className="linkbold">LA NACION</a> <span>|</span> <a href="#" className="linkbold">TECNOLOGÍA</a> <span>|</span> <a href="#">TECNOLOGÍA</a>
        <h1>Japón planea tener el rascacielos de madera más alto del mundo en Tokio</h1>
      </nav>
    );
  }
}
class Content extends Component{
  render(){
    return(
      <figure>
        <img src={edificio1} alt="imagen1" id="foto1"/>
        <figcaption id="">Tendrá 350 metros de altura y será la más alta en su tipo, con una construcción cuya estructura combina nueve partes de madera y una de acero</figcaption>
      </figure>
    )
  }
}

export default App;
