import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const FiveDayForecast = (props) => {
  const forecastDay = props.data.list.filter((val, i) => {
    return i === 0 || i % 8 === 0
  })

  return (
    <div className={css(styles.wrapper)}>
      {forecastDay.map(cur => (
        <div key={cur.dt}>
          <p>The forecast for {props.data.city.name} on {cur.dt_txt.substring(0, 11)} is:</p>
          <img src={`http://openweathermap.org/img/w/${cur.weather[0].icon}.png`} />
          <h3>{cur.weather[0].main}</h3>
          <p>{cur.weather[0].description}</p>
          <p>Temperature {(cur.main.temp - 273.15).toFixed(2)} C, {((cur.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)} F</p>
        </div>
      ))}
    </div>
  )
}

export default FiveDayForecast

const styles = StyleSheet.create({
  padding: '1em 0'
})
