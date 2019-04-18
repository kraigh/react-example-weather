import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.searchSubmit}>
                <label htmlFor="zip">Zipcode</label>
                <input id="zip" type="text" value={this.props.zipInput} onChange={this.props.zipChange}></input>
                <input type="submit" value="search"></input>
            </form>
        );
    }
}

export default SearchForm;
