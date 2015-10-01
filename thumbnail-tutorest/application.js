// Breaking JSX into multiple files for better maintenance

var options = {
  thumbnailData : [{
    title:'Inbox',
    number:32,
    header: 'Learn Violin',
    description: 'this is to learn subject. this is description for this course',
    imageUrl: 'https://i.embed.ly/1/display?key=fc778e44915911e088ae4040f9f86dcd&url=https%3A%2F%2Fmedia.licdn.com%2Fmpr%2Fmpr%2Fp%2F5%2F005%2F093%2F18c%2F266dd5e.jpg'
  }, {
    title:'Inbox',
    number:25,
    header: 'Learn Golf',
    description: 'You can be a tiger woods!',
    imageUrl: 'https://www.palacasino.com/wp-content/uploads/2009/11/GolfImage.jpg'
  }]
};

//
// React, please render this class
//
// element is instance of Badge class
var element = React.createElement(ThumbnailList, options);

//
// React, after you render this class, please place it in my body tag
//
// render(instance, whereToRender)
React.render(element, document.querySelector('.target'));

//
// 1. Define a 'class'
//
// one requirment : implement render function
var Badge = React.createClass({displayName: "Badge",
  render: function() {
      // whenever react sees '{', '}', it will try to figure our options
      return  React.createElement("button", {className: "btn btn-primary", type: "button"}, 
              this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
              )
  }
});

var Badge = require('badge');

var Thumbnail = React.createClass({displayName: "Thumbnail",
  // 모든 다이나믹한 필드는 { }로 감싸 보낸다.
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl, align: "left"}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});

var Thumbnail = require('thumbnail');

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });
    return React.createElement("div", null, 
      list
    )
  }
});
