var React = require('react');


// how to work with form - controlled/uncotrolled

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text:''
    }
  },
  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Add
        </button>
      </span>
      </div>
  },
  handleClick: function() {
    console.log(this.state.text);
    // send value of the text input to firebase
    // push makes new object in remote database
    this.props.itemStore.push({
      // scheme
      text: this.state.text,
      done: false
    });
    this.setState({text:''});
  },
  handleInputChange: function(event) {
    // DOM reference. In this case, input
    // every DOM property has value as member
    //console.log(event.target.value);
    this.setState({text: event.target.value});
  }
});
