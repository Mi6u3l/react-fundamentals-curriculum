var React = require('react');
var GetWeatherButton = require('../components/GetWeatherButton');
var CityInput = require('../components/CityInput');
var getForecast = require('../utils/api').getForecast


var GetWeatherContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
   getInitialState: function () {
    return {
      city: ''
    }
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    });
  },
  handleOnSubmitCity: function (e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
  },
  render: function () {
    return (
      <div>
        <CityInput
          onUpdateCity={this.handleUpdateCity} 
          city={this.state.city}/>
        <GetWeatherButton
          onSubmitCity={this.handleOnSubmitCity} />
      </div>
    )
  }
});

module.exports = GetWeatherContainer;
