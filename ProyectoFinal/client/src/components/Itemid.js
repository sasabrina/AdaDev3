import React, { Component } from 'react';
import '../css/Itemid.css'
import Breadcrumb from './Breadcrumb'

class Itemid extends Component{
    constructor(props){
        super(props);
        this.state = {item: null}
    }

    componentDidMount(){
        var id= this.props.match.params.id;
        console.log(id);

        fetch(`/items/${id}`)
        .then(res => res.json())
        .then(resp => {this.setState({
            item:resp.items,
            categories:resp.categories})
            })
        .catch(err => console.log('error', err))
    }

    render() {
        var i= this.state.item;
        if(this.state.item == null){
            return(
                <p>Cargando...</p>
            )
        }else{
            
        return(
            <section>
                <div>
                    <Breadcrumb categorias={this.state.categories}/>
                </div>
                <div className='Itemid-main'>
                    <div className='Itemid-pic'>
                        <img src={i.picture} alt={i.picture}/>
                    </div>
                    <div className='Itemid-data'>
                        <div>
                            <p className='condition'>{i.condition} - {i.sold_quantity} vendidos</p>
                            <p className='item-title'>{i.title}</p>
                            {i.price && <p className='item-price'><span>{i.price.currency}</span>{i.price.amount}</p>}
                        </div>
                        <div className='comprar'>
                            <a href='http://mercadolibre.com.ar'>
                                <button className='comprarbtn'>Comprar</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='Itemid-description'>
                    <p className='description-title'>Descripción del producto</p>
                    <p className='description-text'>{i.description}</p>
                </div>
            
            </section>
        )
    }
    }
}

export default Itemid;