
var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: "Choose an interest",
  items: [
    'Golf',
    'Skating',
    'Violin',
    'Piano'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
