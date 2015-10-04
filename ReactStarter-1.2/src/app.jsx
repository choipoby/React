var React = require('react');
var ReactFire = require('reactfire'); // comm between readct and data from firebase
var Firebase = require('firebase'); // comm with online database
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://flickering-fire-7116.firebaseio.com/';

var App = React.createClass({
  getInitialState: function() {
      return {
        items:{}
      }
  },
  // react lifecycle methods - componentWillMount
  // Invoked once, both on the client and server, immediately before the initial rendering occurs.
  // we want to create firebase object one time
  mixins: [ReactFire],
  componentWillMount: function() {
    // bindAsObject - reactfire method (available via mixins)
    // mixins of ReactFire copies ReacFire methods to this component
    fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(fb, 'items');
    // if we get value from firebase, we call handleDataLoaded
    fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    console.log(this.state);
    return <div className="row panel panel-default">
      <div className="col-md-8 col-mo-offset-2">
        <h2 className="text-center">
          To-Do list
        </h2>
        <Header itemStore={this.firebaseRefs.items}/>
        <div className={"content " + (this.state.loaded?'loaded':'')}>
          <List items={this.state.items} />
        </div>
      </div>
    </div>
  },
  handleDataLoaded: function() {
    this.setState({loaded:true});
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
