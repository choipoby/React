var React = require('react');
// <a> tag is for extra styling
module.exports = React.createClass({
  handleClick: function() {
    this.props.whenItemClicked(this.props.item);
    console.log(this.props.item + ' clicked');
  },
  render: function() {
    return <li className={this.props.className}>
      <a onClick={this.handleClick}>
        {this.props.item}
      </a>
      </li>
  }
})
