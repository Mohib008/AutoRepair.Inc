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
  }

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({AutoIncs: users}));
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
           handleChange={e => this.setState({ searchField: e.target.value })}
         />
         <CardList AutoIncs = {filteredAutoIncs} />
       </div>
     );
   }
}

export default App;
