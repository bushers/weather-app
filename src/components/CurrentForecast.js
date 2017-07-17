import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { StyleSheet, css } from 'aphrodite'

const CurrentForecast = (props) => (
  <CSSTransitionGroup
    transitionName='fade-in'
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnterTimeout={100}
    transitionLeaveTimeout={100}>
    <div className={css(styles.wrapper)}>
      <div>
        <h3>The current forecast for {props.data.name} is:</h3>
        <img className={css(styles.img)} src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} />
        <h3>{props.data.weather[0].main}</h3>
        <p>Description: "{props.data.weather[0].description}"</p>
        <p>Temperature {(props.data.main.temp - 273.15).toFixed(2)} C, {((props.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2)} F</p>
      </div>
    </div>
  </CSSTransitionGroup>
)

export default CurrentForecast

CurrentForecast.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.array.isRequired,
    main: PropTypes.object.isRequired
  })
}

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em 0'
  },
  img: {
    width: 75
  }
})
