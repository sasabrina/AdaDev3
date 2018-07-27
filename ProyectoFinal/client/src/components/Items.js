import React, { Component } from 'react';
import '../css/Items.css';
import {Link} from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
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
        .then(res => this.setState({
            items:res.items, 
            categories:res.categories}))
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
                    <div>
                        <Breadcrumb categorias={this.state.categories}/>
                    </div>
                    {this.state.items.map(i =>
                        <Link className='link' key={i.id} to={`/items/${i.id}`}>
                            <div className='Item-main'>
                                <div className='Item-pic'>
                                    <img src={i.picture} alt={i.picture}/>
                                </div>
                                <div className='Item-data'>
                                    {i.price && 
                                    <p className='price'><span>{i.price.currency}</span>{i.price.amount}</p>}
                                    <p className='title'>{i.title}</p>
                                </div>
                                <div>
                                    <p className='state'>{i.state}</p>
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