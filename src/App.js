import React, {Component} from 'react';
import logo from './logo.svg';
import {CardList} from './components/card-list/card-list-component' 
import {SearchBox} from './components/searchBox/searchBox'
import './App.css';
import './index.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField : ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox handleChange={e => this.setState({searchField: e.target.value})} 
    placeholder="Search Bitch"/>
    <CardList monsters={filteredMonsters} />

    </div>
    )};
}

export default App;
