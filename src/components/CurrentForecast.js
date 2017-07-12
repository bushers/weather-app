import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const CurrentForecast = (props) => (
  <div className={css(styles.wrapper)}>
    <div>
      <p>The current forecast for {props.data.name} is:</p>
      <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} />
      <h3>{props.data.weather[0].main}</h3>
      <p>{props.data.weather[0].description}</p>
      <p>Temperature {(props.data.main.temp - 273.15).toFixed(2)} C, {((props.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)} F</p>
    </div>
  </div>
)

export default CurrentForecast

const styles = StyleSheet.create({
  padding: '1em 0'
})
