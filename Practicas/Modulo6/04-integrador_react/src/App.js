import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/fontawesome-free-brands'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faGooglePlusG } from '@fortawesome/fontawesome-free-brands'
import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
library.add(faGithub, faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn)

class App extends Component {
  render() {
    return (<div><Header/></div>);
  }
}
class Header extends Component{
  render(){
    return(
      <nav>
        <div id='nombre'>
          <h1>Sabrina Alvarez</h1>
          <h4>Front-End Developer</h4>
        </div>
        <div id='social'>
          <span><FontAwesomeIcon icon={faFacebookF}/></span>
          <span><FontAwesomeIcon icon={faTwitter}/></span>
          <span><FontAwesomeIcon icon={faGooglePlusG}/></span>
          <span><FontAwesomeIcon icon={faLinkedinIn}/></span>
          <span><FontAwesomeIcon icon={faGithub}/></span>
        </div>
      </nav>
    );
  }
}
export default App;
