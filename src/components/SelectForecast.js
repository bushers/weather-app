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
    padding: '1em',
    margin: '0 1em',
    borderRadius: '5px',
    fontSize: '1.3em',
    color: '#fff',
    border: 'none',
    backgroundColor: '#6496c8',
    boxShadow: '0 4px #27496d',
    ':hover': {
      backgroundColor: '#417cb8',
      cursor: 'pointer'
    },
    ':active': {
      backgroundColor: '#417cb8',
      boxShadow: '0 0 #27496d',
      transform: 'translateY(5px)'
    }
  }
})
