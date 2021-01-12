import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Posts from './components/Posts';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import Pusher from 'pusher-js';
const {PUSHER_APP_KEY, PUSHER_CLUSTER} = require('./keys');

// connect react client to graphQL server
const client = new ApolloClient({
  	uri: "http://localhost:4000/graphql"
});

class App extends Component{
	constructor(){
		super();
		// connect to pusher
		this.pusher = new Pusher(PUSHER_APP_KEY, {
			cluster: PUSHER_CLUSTER,
			encrypted: true
		});
	}

	render(){
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<Header />
					<section className="App-main">
					{/* pass the pusher object and apollo to the posts component */}
						<Posts pusher={this.pusher} apollo_client={client}/>
					</section>
				</div>
			</ApolloProvider>
		);
	}
  }

  export default App;