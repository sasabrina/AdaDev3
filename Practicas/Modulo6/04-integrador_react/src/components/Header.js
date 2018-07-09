import React, { Component } from 'react';
import './css/Header.css'
import Social from './Social'
import profilepic from './cvimg.jpg'

class Header extends Component{
    render(){
      return(
        <div>
          <nav>
            <div id='nombre'>
              <h1>SABRINA ALVAREZ</h1>
              <h4>Front-End Developer</h4>
            </div>
            <div id='navicons'>
                <Social/>
            </div>
          </nav>
          <div id='profilediv'>
          <figure>
            <img src={profilepic} alt='profile image' id='profilepic'/>
          </figure>
          <div id='profiledata'>
            <h2>I'M <span>SABRINA ALVAREZ</span></h2>
            <h4>Front-End Dev & Coffee addict</h4>
            <hr/>
            <table>
              <tr>
                <th>Age</th>
                <td>31</td>
              </tr>
              <tr>
                <th>Adress</th>
                <td>P. Sherman 42 Wallaby Way, Sydney</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>sabrinaealvarez@gmail.com</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>0303456</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>github.com/sasafrita</td>
              </tr>
            </table>
            <div id='profileicons'>
                <Social/>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

  export default Header;