import React, { Component } from 'react';
import './css/Repository.css'

class Repository extends Component{
    constructor(props){
        super(props);
        this.state = {
            repos: [],
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/sasafrita/repos')
        .then(results =>{
            return results.json();
        })
        .then(repos =>{
            return repos.map(repo=>{
                return {'name': repo.name, 'id': repo.id, 'url': repo.url,}
            });
        })
        .then(repos=> this.setState({repos}));
    }
    
    render(){
        return(
            <div id='repoCont'>
                <div id='divrepo'>
                    <h1>Repositories</h1>
                </div>
                <div>
                    {this.state.repos.map(repo=> 
                    <div key={repo.id}>
                        <h3>{repo.name}</h3>
                        <a href={repo.url}>ver en Github</a>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Repository;