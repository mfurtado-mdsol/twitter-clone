import React from 'react';

export default class Tweet extends React.Component {
  render() {
    return(
      <div className="well well-lg">
        <img src={this.props.gravatar} className="img-thumbnail" />
        {this.props.name} <i className="fa fa-weixin"></i> : {this.props.body}
        <br />
        {this.props.formattedDate}
      </div>
    );
  }
}
