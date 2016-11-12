var React = require('react');

function CityInput(props) {
 return (
     <div>
      <input
        className='form-control'
        onChange={props.onUpdateCity}
        placeholder='Lisbon'
        type="text" 
        value={props.city}/>
      </div>
    )  
}

 
module.exports = CityInput;

