import React, { Component } from 'react';
import './Temp.css';

class Temp extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <p>Temperature is: {this.props.kraigtemp} degrees</p>
                <button onClick={this.props.refresh}>Refresh</button>
            </div>
        );
    }
}

export default Temp;
