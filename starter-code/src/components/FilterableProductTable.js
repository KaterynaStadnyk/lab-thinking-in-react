import React, { Component } from 'react';
import ProductRow from './ProductRow';

// import ProductRow from "./components/ProductRow"; 



class FilterableProductTable extends Component {

    
  render() {
      // console.log("STATE: ", this.state.listOfProducts)
      // console.log("PROPS: ", this.props.products)
    const prods = this.props.products.map(x => <ProductRow key={x.name} product={x} />)
    return (
      <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </table>
          {prods}
      </div>
    );
  }
}

export default FilterableProductTable;