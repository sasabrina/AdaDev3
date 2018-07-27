import React, { Component } from 'react';
import '../css/Breadcrumb.css'

class Breadcrumb extends Component{
    render(){
        return(
            <ul className="breadcrumb">
                {this.props.categorias.map((c, i)=>
                    <li key={i}> {c}{i<this.props.categorias.length-1?' > ':''} </li>
                )}
            </ul>
        )
    }
    
}

export default Breadcrumb;