

import React, { Component } from 'react'
// import data from "../data.json"; 

 class ProductRow extends Component {
    
    render() {


        
            return (
            <tr>
                <td>
                {this.props.product.name}
                </td>
                <td>
                {this.props.product.price}
                </td>
            </tr>
            ) 
        
        
    }
}

export default ProductRow; 