import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { StyleSheet, css } from 'aphrodite'

const SelectForecast = (props) => (
  <div className={css(styles.wrapper)}>
    <CSSTransitionGroup
      transitionName='fade-in-down'
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnterTimeout={100}
      transitionLeaveTimeout={100}>
      <h3 className={css(styles.title)}>Select your forecast type</h3>
    </CSSTransitionGroup>
    <CSSTransitionGroup
      transitionName='fade-in-up'
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnterTimeout={100}
      transitionLeaveTimeout={100}>
      <button
        className={css(styles.btn)}
        onClick={props.handleClick}
        name='current'>Current Forecast
      </button>
    </CSSTransitionGroup>
    <CSSTransitionGroup
      transitionName='fade-in-up'
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnterTimeout={100}
      transitionLeaveTimeout={100}>
      <button
        className={css(styles.btn)}
        onClick={props.handleClick}
        name='5day'>5 Day Forecast
      </button>
    </CSSTransitionGroup>
  </div>
)

export default SelectForecast

SelectForecast.propTypes = {
  handleClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    padding: '1em'
  },
  title: {
    margin: '1em 0 2em 0'
  },
  btn: {
    width: '185px',
    padding: '.75em',
    margin: '0.5em 1em',
    fontSize: '1.2em',
    color: '#fff',
    border: 'none',
    backgroundColor: '#FF665E',
    ':hover': {
      backgroundColor: '#e64d45',
      cursor: 'pointer'
    },
    ':active': {
      backgroundColor: '#cc332b',
      transform: 'translateY(2px)'
    }
  }
})
