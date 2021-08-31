import React, { Component } from 'react';
import '../styles/Search.css';
import twitter from "./twitter.png";

console.log(twitter)

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          friends: [],
          name: '',
          id: '',
          notes: ''
        };

    };
    render () {
        return(
            <form className="form">
                <img className="image" src={twitter} alt="twitter" />
                <br></br>
                <input type="search" />
                <input className="buton" type="submit" value="Search" />
            </form>
        );
    }
}

export default Search;