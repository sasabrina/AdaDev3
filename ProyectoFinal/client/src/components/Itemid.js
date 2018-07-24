import React, { Component } from 'react';

class Itemid extends Component{
    constructor(props){
        super(props);
        this.state = {item: {}}
    }

    componentDidMount(){
        var id= this.props.match.params.id;
        console.log(id);

        fetch(`/items/${id}`)
        .then(res => res.json())
        .then(resp => {this.setState({item:resp.items})
            })
        .catch(err => console.log('error', err))
    }

    render() {
        var i= this.state.item;
        return(
            <section>
                {i &&
                <div>
                    <div className='itemIdpic'>
                        <img src={i.picture}/>
                    </div>
                    <div className='itemIddata'>
                        <div>
                            <p>{i.condition}</p>
                            <h3>{i.title}</h3>
                            {i.price && 
                                <h1>$ {i.price.amount}</h1>}
                        </div>
                        <div>
                            <a href='#'>
                                <button>Comprar</button>
                            </a>
                        </div>
                        <div>
                            <p>{i.description}</p>
                        </div>
                    </div>
                </div>
                }
            </section>
        )
    }
}

export default Itemid;