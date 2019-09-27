import React, { Component } from "react";

class SearchBar extends Component {
  handleChange = event => {
    const { value } = event.target;
    // here we need to pass the `value` up to the parent component
    
    this.props.handleQuery(value);
  };

  render() {
 

    return (
      <div>
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar; 