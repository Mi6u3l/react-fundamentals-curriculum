var React = require('react');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main.js Header</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;