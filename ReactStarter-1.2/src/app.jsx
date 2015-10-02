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
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
    // after this, anything found under url/items/ will be seen as this.state.items => {}
    // whenever this changes, it will cause re-render
  },
  render: function() {
    console.log(this.state);
    return <div className="row panel panel-default">
      <div className="col-md-8 col-mo-offset-2">
        <h2 className="text-center">
          To-Do list
        </h2>
        <Header itemStore={this.firebaseRefs.items}/>
        <List items={this.state.items} />
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
