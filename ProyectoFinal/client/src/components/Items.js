import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const queryString = require('query-string');

class Items extends Component{
    constructor (props) {
        super(props);
        this.state = {items:[]}
    }

    componentDidMount(){

        var search= queryString.parse(this.props.location.search);
        console.log(search);
        
        fetch(`/items?q=${search.search}`)
        .then(res => res.json())
        .then(res => this.setState({items:res.items}))
        .catch(err => console.log('error', err))
        
    }

    render() {
        if(this.state.items.length === 0){
            return(
                <p>Cargando...</p>
            )
        }else{
            return(
                <section>
                    {this.state.items.map(i =>
                        <Link key={i.id} to={`/items/${i.id}`}>
                            <div>
                                <div className='itempic'>
                                    <img src={i.picture} alt={i.picture}/>
                                </div>
                                <div className='itemdata'>
                                    {i.price && 
                                    <h1>$ {i.price.amount}</h1>
                                    }
                                    <p >{i.title}</p>
                                </div>
                                <div>
                                    <p>{i.city}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </section>
            )
        }
    }
}

export default Items;