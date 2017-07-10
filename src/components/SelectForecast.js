import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const SelectForecast = (props) => (
  <div className={css(styles.wrapper)}>
    <button onClick={props.handleClick} name='current'>Current Forecast</button>
    <button onClick={props.handleClick} name='5day'>5 Day Forecast</button>
  </div>
)

export default SelectForecast

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em'
  }
})
