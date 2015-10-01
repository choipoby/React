var React = require('react');

// event handler, such as onClick 이 이제 전달받는 형식이 되므로, 이 모듈을 reuse하는게 아주 편해진다.
// 버튼에게 parameter를 넘기는 형식으로 하여서, 버튼이 아주 reusable하게 된다.
// 버튼이 함수, 혹은 정말 클래스처럼 되는구나.
module.exports = React.createClass({
  render: function() {
    return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitleClassName}</span>
      </button>
  }
});
