import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

export default class App extends React.Component{
  constructor(){
    super()

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  fetchFilters = () => {
       fetch('/api/fruit_types')
         .then(response => response.json())
         .then(filters => this.setState({ filters }));
     }

  componentWillMount() {
    this.fetchFilters();
  }


     componentDidMount() {
          fetch('/api/fruit')
            .then(response => response.json())
            .then(items => this.setState({ items }));
        }

  render(){
    return (
      <div>
      <Filter
      handleFilterChange={this.handleFilterChange}
      filters={this.state.filters}
      fetchFilters={this.fetchFilters}/>
      <FilteredFruitList
      fruit={this.state.fruit}
      filters={this.state.filters}/>
      <FruitBasket
      fruit={this.state.fruit}
      filters={this.state.filters}
      currentFilter={this.state.currentFilter}
      handleFilterChange={this.handleFilterChange} />
      </div>
    )
  }
}
