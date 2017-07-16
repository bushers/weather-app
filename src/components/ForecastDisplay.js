import React from 'react'
import CurrentForecast from './CurrentForecast'
import FiveDayForecast from './FiveDayForecast'
import { CSSTransitionGroup } from 'react-transition-group'
import { StyleSheet, css } from 'aphrodite'

const ForecastDisplay = (props) => (
  <div className={css(styles.wrapper)}>
    {props.data
      ? (props.forecastType === 'current'
          ? <CurrentForecast data={props.data} />
          : <FiveDayForecast data={props.data} />)
      : (
        <CSSTransitionGroup
          transitionName='fade-in-down'
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}>
          <h3 className={css(styles.text)}>
            Search for your selected forecast by entering a city below
          </h3>
        </CSSTransitionGroup>
        )
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
