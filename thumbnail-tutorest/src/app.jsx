// Breaking JSX into multiple files for better maintenance

var React = require('react');
var ThumbnailList = require('./thumbnailList'); //file I create, I have to set path

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
// React, please render this class.
// element is instance of Badge class
var element = React.createElement(ThumbnailList, options);

//
// React, after you render this class, please place it in my body tag
// render(instance, whereToRender)
React.render(element, document.querySelector('.target'));
