import React, { Component } from "react";
import VoteButtons from './VoteButtons'
import './Joke.css';

class Joke extends Component {
  upVote = () => {
    this.props.vote(this.props.id, +1);
  }

  downVote = () => {
    this.props.vote(this.props.id, -1);
  }

  render() {
    const { votes, text } = this.props;
    <div className="Joke">
      <div className="Joke-votearea">
        <VoteButtons upvote={this.upVote} downVote={this.downVote} />
        { votes }
      </div>
      <div className="Joke-text">{text}</div>
    </div>
  }
}

export default Joke;