var React = require('react'); //npm module. no path necessary

module.exports = React.createClass({
  render: function() {
      // whenever react sees '{', '}', it will try to figure our options
      return  <button className="btn btn-primary" type="button">
              {this.props.title} <span className="badge">{this.props.number}</span>
              </button>
  }
});
