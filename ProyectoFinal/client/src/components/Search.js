import React, { Component } from 'react';

class Search extends Component{

      render(){
          return(
              <div>
                  <form method='get' action='/items'>
                      <input type='text' name="search"></input>
                      <input type='submit'></input>
                  </form>
              </div>
          );
      }
    }
    

export default Search;