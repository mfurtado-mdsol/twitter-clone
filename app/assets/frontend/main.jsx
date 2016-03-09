import React from 'react';
import ReactDOM from 'react-dom';
import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import TweetActions from './actions/TweetActions';
import TweetStore from './stores/TweetStore';

let getAppState = () => {
  return { Tweets: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    TweetActions.getAllTweets();
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log(5, "Main._onChange");
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <br />
        <TweetBox />
        <br />
        <TweetList tweets={this.state.Tweets} />
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode) {
    ReactDOM.render(<Main />, reactNode)
  }
}

$(documentReady)
