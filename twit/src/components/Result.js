import React, { Component } from 'react';
import '../styles/Search.css';

var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
})

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tweets: [],
          count: 0,
          page: 0,
          paging: false,
          skip: 0,
          done: false,
          searchTerm: 'JavaScript',
        };

    }
}

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
 

T.get('account/verify_credentials', { skip_status: true })
  .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    console.log('data', result.data);
  })