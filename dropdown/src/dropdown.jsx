// we need to show a button and a list
// this component should know when to show the list based on
// when the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

// click이 됬는지 알아야 될 놈은 아래 모듈, not Button module
// we can not put event handler inside of other react component
// 따라서 Button onClick= 은 안된다.

// setState는 아주 중요한 함수 - re-render하게 만든다.
// 언제나 언제나 setState를 사용하여 상태를 바꿔야 한다.
// never use "this.state.open = true/false"
module.exports = React.createClass({
  getInitialState: function(){
    return { open: false }
  },
  handleClick: function() {
    this.setState({open:!this.state.open});
    console.log('current state ' + this.state.open );
  },
  handleItemClick: function(item){
    // how do I know which Item got clicked?
    this.setState({
      open:false,
      itemTitle: item
    });
    console.log(item);
  },
  render: function() {
    var list = this.props.items.map(function(item){
      return <ListItem
              item={item}
              whenItemClicked={this.handleItemClick}
              className={this.state.itemTitle === item ? "active" : ""}
              />
    }.bind(this));
    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.state.itemTitle || this.props.title}
        subtitleClassName="caret"
        />
      <ul className={"dropdown-menu " + (this.state.open?"show":"")}>
        {list}
      </ul>
    </div>
  }
});
