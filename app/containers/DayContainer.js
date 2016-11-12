var React = require('react');
var Day = require('../components/Day');

var DetailContainer = React.createClass({
  render: function() {
    console.log(this.props.location.state.weather)
    return (
      <Day weather={this.props.location.state.weather} />
    );
  }

});

module.exports = DetailContainer;