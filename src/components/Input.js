import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const Input = (props) => (
  <div>
    <form className={css(styles.formWrapper)} onSubmit={props.handleSubmit}>
      <input
        className={css(styles.textBox)}
        type='text'
        placeholder='Enter a city name'
        onChange={props.onChange} />
      <input
        className={css(styles.btn)}
        type='submit'
        value='Enter' />
    </form>
    <button
      className={css(styles.btn)}
      onClick={props.goBack}
      name='back'>
      Go Back
    </button>
  </div>
)

export default Input

Input.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  formWrapper: {
    margin: '1em 0'
  },
  textBox: {
    padding: '0.4em 1em',
    backgroundColor: '#efefef'
  },
  btn: {
    padding: '0.5em 1em',
    margin: '0 1em',
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
