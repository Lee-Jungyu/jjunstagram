import React, { Component } from "react";
import "./Posts.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../Post";

class Posts extends Component{
	constructor(){
		super();
		this.state = {
			posts : []
		}
	}

	componentDidMount(){

		// request permission
		Notification.requestPermission();

		// subscribe to posts channel
		this.posts_channel = this.props.pusher.subscribe("post-channel");
		this.posts_channel.bind("new-post", data => {
			// update states
			this.setState({ posts: this.state.posts.concat(data.post) });

			// check if notifications are permitted
			if(Notification.permission === 'granted') {
				try {
					// notify user of new post
					new Notification(
						'Pusher Jjunstagram',
						{ 
							body: `New post from ${data.post.user.nickname}`,
							icon: 'https://img.stackshare.io/service/115/Pusher_logo.png',
							imaage: `${data.post.image}`,
						}
					);
				} catch(e) {
					console.log('Error displaying notification');
				}
			}
		}, this);

        // fetch the initial posts 
        this.props.apollo_client
			.query({ 
				query:gql`
					{
						posts(user_id: "a"){
							id
							user{
								nickname
								avatar
							}
							image
							caption
						}
					} 
			`})
			.then(response => {
				this.setState({ posts: response.data.posts});
			});
			  
			//  subscribe to posts channel
			this.posts_channel = this.props.pusher.subscribe('posts-channel');

			// listen for a new post
			this.posts_channel.bind("new-post", data => {
				this.setState({ posts: this.state.posts.concat(data.post) });
			}, this);
	}

	render(){
    	return (
			<div className="Posts">
				{this.state.posts.map(post => 
					<Post nickname={post.user.nickname} 
						avatar={post.user.avatar} 
						image={post.image} 
						caption={post.caption}
						key={post.id}/>
				)}
			</div>
		);
    }
}

export default Posts;
