import React from 'react'
import CurrentForecast from './CurrentForecast'
import FiveDayForecast from './FiveDayForecast'
import { StyleSheet, css } from 'aphrodite'

const ForecastDisplay = (props) => (
  <div className={css(styles.wrapper)}>
    {props.data
      ? (props.forecastType === 'current'
          ? <CurrentForecast data={props.data} />
          : <FiveDayForecast data={props.data} />)
      : (<div>No city selected</div>)
    }
    <button
      className={css(styles.btn)}
      onClick={props.handleClick}
      name='back'>
      Back
    </button>
  </div>
)

export default ForecastDisplay

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em 0'
  },
  btn: {
    padding: '0.5em 1em',
    margin: '0 1em',
    borderRadius: '4px',
    color: '#fff',
    border: 'none',
    backgroundColor: '#6496c8',
    boxShadow: '0 2px #27496d',
    ':hover': {
      backgroundColor: '#417cb8',
      cursor: 'pointer'
    }
  }
})
