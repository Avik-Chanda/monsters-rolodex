import React from 'react';
import { CardList } from './components/Card-List/card-list-component';
import { SearchBox } from './components/SeachBox/searchbox-component';
import './App.css';

// https://jsonplaceholder.typicode.com/users


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }))
  }

  handleChange= (e)=>
  {
    this.setState({searchField : e.target.value})
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (

      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <input type="search"
          name="searchBox"
          id="searchBox"
          placeholder="Search your monster"

          // Asysnchronous operation 
          // onChange={e => {
          //   this.setState({searchField:e.target.value})
          //   console.log(this.state)
          // }}

          //Synchronous Operation 

          onChange={
            e => this.setState({ searchField: e.target.value })
          } */}

        {/* /> */}

        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    )

  }
}


export default App;
