var React = require('react');

function GetWeatherButton(props) {
 return (
     <div>
       <button type='button' 
         style={{margin: 10}}
         className='btn btn-success'
         onClick={props.onSubmitCity}>
         Ver tempo
       </button>
      </div>
    )  
}

 
module.exports = GetWeatherButton;

