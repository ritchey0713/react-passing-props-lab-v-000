import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   // handleFilterChange = event => {
//   //   console.log('new filter: ', event.target.value);
//   //   this.setState({ selectedFilter: event.target.value });
//   // }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

const FruitBasket = (fruit, filters, currentFilter, handleFilterChange) => {
 return (
   <div className="fruit-basket">
           <Filter handleChange={handleFilterChange} />
           <FilteredFruitList
             filter={currentFilter} />
         </div>
 )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;
