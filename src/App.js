import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list/card-list';
import { SearchBox } from './components/Search-Box/searchBox';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      AutoIncs: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({AutoIncs: users}));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { AutoIncs, searchField } = this.state;
    const filteredAutoIncs = AutoIncs.filter(AutoInc => 
      AutoInc.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
       <div className="App">
         <SearchBox
           placeholder="search Cars"
           handleChange={this.handleChange}
         />
         <CardList AutoIncs = {filteredAutoIncs} />
       </div>
     );
   }
}

export default App;
