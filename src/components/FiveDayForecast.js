import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { StyleSheet, css } from 'aphrodite'

const FiveDayForecast = (props) => {
  const forecastDay = props.data.list.filter((val, i) => {
    return i === 0 || i % 8 === 0
  })

  return (
    <CSSTransitionGroup
      transitionName='fade-in'
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnterTimeout={100}
      transitionLeaveTimeout={100}>
      <div>
        {forecastDay.map(cur => (
          <div className={css(styles.forecast)} key={cur.dt}>
            <h3>The forecast for {props.data.city.name} on {cur.dt_txt.substring(0, 11)} is:</h3>
            <img src={`http://openweathermap.org/img/w/${cur.weather[0].icon}.png`} />
            <h3>{cur.weather[0].main}</h3>
            <p>Description: "{cur.weather[0].description}"</p>
            <p>Temperature {(cur.main.temp - 273.15).toFixed(2)} C, {((cur.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)} F</p>
            <hr className={css(styles.hr)} />
          </div>
        ))}
      </div>
    </CSSTransitionGroup>
  )
}

export default FiveDayForecast

FiveDayForecast.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    list: PropTypes.arrayOf(PropTypes.object.isRequired)
  })
}

const styles = StyleSheet.create({
  forecast: {
    margin: '3em'
  },
  hr: {
    marginTop: '2em'
  }
})
