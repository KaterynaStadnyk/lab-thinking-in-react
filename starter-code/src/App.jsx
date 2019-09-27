import React, { Component } from 'react';
// import PorductRow from "./components/ProductRow"; 
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from "./components/SearchBar";
import data from './data.json';

class App extends Component {
  state = {
    data: data.data,
    query: ""
  };

  setQuery = query => {
    this.setState({
      query
    });
  };

  render() {
    
    const filteredProducts = this.state.data
    .filter(product => {
      return product.name
        .toLowerCase()
        .includes(this.state.query.toLowerCase());
    })

    // console.log(this.state.data)
    // console.log(filteredProducts)

    return (
      <div className="App">
      <h1>IronStore</h1>
        
        <SearchBar handleQuery={this.setQuery} query={this.state.query} />
        
        <FilterableProductTable products={filteredProducts}/>


      </div>
    );
  }
}

export default App;