import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const SelectForecast = (props) => (
  <div className={css(styles.wrapper)}>
    <h3 className={css(styles.title)}>Select your forecast type</h3>
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
  title: {
    margin: '1em 0 2em 0'
  },
  btn: {
    width: '180px',
    padding: '.75em',
    margin: '0.5em 1em',
    borderRadius: '5px',
    fontSize: '1.2em',
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
