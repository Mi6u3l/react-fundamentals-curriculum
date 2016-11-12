var React = require('react');
var styles = require('../styles/index.js');
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var Home = React.createClass({
  render: function(){
    return (
      <div className='col-sm-12' style={styles.homeBackground}>
      <h1 style={styles.header}>Introduza uma cidade</h1>
        <div style={styles.weatherForm}>
          <GetWeatherContainer />
        </div>
      </div>
    )
  }
})

module.exports = Home;

