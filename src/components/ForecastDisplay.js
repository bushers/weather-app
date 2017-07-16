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
      : (<h3 className={css(styles.text)}>Search for your selected forecast by entering a city below</h3>)
    }
  </div>
)

export default ForecastDisplay

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em 0'
  },
  text: {
    margin: '1em 0'
  }
})
