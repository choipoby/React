var React = require('react');

module.exports = React.createClass({
  render: function() {
    console.log(this.props);
    return <ul>
      {this.renderList()}
    </ul>
  },
  renderList: function() {
    if(this.props.items && Object.keys(this.props.items).length === 0 ) {
      return <h4>
        Add a todo to get started
        </h4>
    } else {
      var list = [];
      for(var key in this.props.items) {
        list.push(
          <li>
            {this.props.items[key].text}
          </li>
        )
      }
      return list;
    }
  }
});
