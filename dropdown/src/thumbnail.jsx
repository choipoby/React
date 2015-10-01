var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
  // 모든 다이나믹한 필드는 { }로 감싸 보낸다.
  render: function() {
    return <div className="thumbnail">
      <img src={this.props.imageUrl} align="left" />
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        <p>
          <Badge title={this.props.title} number={this.props.number}/>
        </p>
      </div>
    </div>
  }
});
