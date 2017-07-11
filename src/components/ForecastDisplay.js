import React from 'react'

const ForecastDisplay = (props) => (
  <div>
    <h3>Forecast Display</h3>
    {props.data ? (
      <div>{props.data.weather[0].main}</div>
    ) : (
      <div>No city selected</div>
      )}
    <button onClick={props.handleClick} name='back'>
      Back
    </button>
  </div>
)

export default ForecastDisplay
