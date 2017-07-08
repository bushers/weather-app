import React from 'react'

const SelectForcast = (props) => (
  <div>
    <button onClick={props.handleClick} name='current'>Current Forcast</button>
    <button onClick={props.handleClick} name='5day'>5 Day Forcast</button>
  </div>
)

export default SelectForcast
