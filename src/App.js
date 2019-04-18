// libraries
import React, { Component } from 'react';

// components
import SearchForm from './SearchForm'
import Temp from './Temp'

// css
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      zipInput: ''
    }
    this.searchZip = this.searchZip.bind(this);
    this.zipChange = this.zipChange.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  searchZip(event) {
    event.preventDefault();

    // ajax

    this.setState({temp: '90'});
    this.setState({zipInput: ''});
  }
  zipChange(event) {
    this.setState({zipInput: event.target.value});
  }
  refresh(event) {
    // ajax
    this.setState({temp: '95'});

  }
  render() {
    return (
      <div className="App">
        <h1>My Weather App</h1>
        <SearchForm searchSubmit={this.searchZip} zipInput={this.state.zipInput} zipChange={this.zipChange} />
        <Temp kraigtemp={this.state.temp} refresh={this.refresh}/>
      </div>
    );
  }
}

export default App;
