import React from 'react'

const Input = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input type='text'
             placeholder='Enter a city name'
             onChange={props.onChange} />
      <input type='submit' value='Click' />
    </form>
  </div>
)

export default Input
