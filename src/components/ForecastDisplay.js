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
    <button onClick={props.handleClick} name='back'>
      Back
    </button>
  </div>
)

export default ForecastDisplay

const styles = StyleSheet.create({
  padding: '1em 0'
})
