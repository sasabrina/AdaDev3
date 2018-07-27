import React, { Component } from 'react';
import '../css/Search.css';
import logo from '../logo.svg';
import lupa from '../imgs/ic_Search.png'

class Search extends Component{

      render(){
          return(
              <div className='Search-main'>
                <figure>
                    <a href='/'>
                    <img src={logo} alt='logo' className='searchlogo'/>
                    </a>
                </figure>
                <form method='get' action='/items'>
                    <input type='text' name="search" placeholder='Nunca dejes de buscar'></input>
                    <button type='submit' id='searchbtn'>
                        <img src={lupa} alt='lupa'/>
                    </button>
                </form>
              </div>
          );
      }
    }
    

export default Search;