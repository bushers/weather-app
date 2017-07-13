import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Input = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
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
  </div>
)

export default Input

const styles = StyleSheet.create({
  textBox: {
    borderRadius: '5px',
    padding: '0.5em 1em'
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
