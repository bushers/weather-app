import React from 'react'

const ForecastDisplay = (props) => (
  <div>
    Forcast Display
    <button onClick={props.handleClick} name='back'>
      Back
    </button>
  </div>
)

export default ForecastDisplay
