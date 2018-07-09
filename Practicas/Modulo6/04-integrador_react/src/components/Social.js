import React, { Component } from 'react';
import './css/Social.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/fontawesome-free-brands'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faGooglePlusG } from '@fortawesome/fontawesome-free-brands'
import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
library.add(faGithub, faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn)

class Social extends Component{
    render(){
        return(
            <div id='social'>
                <a href='#'><span className='Icons'><FontAwesomeIcon icon={faTwitter}/></span></a>
                <a href='#'><span className='Icons'><FontAwesomeIcon icon={faFacebookF}/></span></a>
                <a href='#'><span className='Icons'><FontAwesomeIcon icon={faGooglePlusG}/></span></a>
                <a href='#'><span className='Icons'><FontAwesomeIcon icon={faLinkedinIn}/></span></a>
                <a href='#'><span className='Icons'><FontAwesomeIcon icon={faGithub}/></span></a>
            </div>
        )
    }
}

export default Social;