import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <div className="input-search">
          <SearchBox placeholder={"Search"} handleSearch={this.handleSearch} />
        </div>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
