import React from 'react';
import TweetActions from '../actions/TweetActions';

export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    TweetActions.sendTweet(this.refs.tweetText.value);
    this.refs.tweetText.value = '';
  }
  render() {
    return(
      <form onSubmit={this.sendTweet.bind(this)}>
        <div className="form-group">
          <label htmlFor="tweet-box">What are you upto?</label>
          <textarea className="form-control" ref="tweetText" rows="3" id="tweet-box"></textarea>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}
