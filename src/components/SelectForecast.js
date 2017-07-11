import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const SelectForecast = (props) => (
  <div className={css(styles.wrapper)}>
    <button
      className={css(styles.btn)}
      onClick={props.handleClick}
      name='current'>Current Forecast
    </button>
    <button
      className={css(styles.btn)}
      onClick={props.handleClick}
      name='5day'>5 Day Forecast
    </button>
  </div>
)

export default SelectForecast

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em'
  },
  btn: {
    padding: '.5em',
    margin: '0 1em',
    borderRadius: '5px',
    fontSize: '1.2em'
  }
})
